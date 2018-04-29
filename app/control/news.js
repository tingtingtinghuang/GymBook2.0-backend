/**
 * news 控制器
 * @author soul
 */

const { model: newsModel } = require('../model/new');
const { model: newsTypeModel } = require('../model/new_type');
const sequelize = require('sequelize');

const { checkSchema, validationResult } = require('express-validator/check');

module.exports['index'] = async function (req, res) {

    // valid

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ code: 0, msg: errors.mapped(), data: null });
    }

    let { id, ps = 10, pi = 0 } = req.query;

    const queryOps = {
        limit: ps,
        offset: pi * 10
    };

    // 查询详情
    if (!isNaN(id)) {
        queryOps['where'] = { ref_type: id };
    }

    let data = await newsModel.findAll(queryOps);

    delete queryOps['limit'];
    delete queryOps['offset'];
    queryOps['attributes'] = [[sequelize.fn('COUNT', sequelize.col('*')), 'count']];
    let countRes = await newsModel.findOne(queryOps);

    // 计算count
    res.send({
        code: 1,
        msg: 'get news done',
        data: {
            count: countRes.dataValues.count,
            list: data
        }
    });
};

module.exports['detail'] = async function (req, res) {
    // valid

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ code: 0, msg: errors.mapped(), data: null });
    }

    let id = req.params.id;
    let data = await newsModel.findOne({
        where: id
    });
    res.send({
        code: 1,
        msg: 'get news detail done',
        data: data
    });
};

module.exports['newsType'] = async function (req, res) {
    let data = await newsTypeModel.findAll();
    res.send({
        code: 1,
        msg: 'get news type done',
        data: data
    });
};