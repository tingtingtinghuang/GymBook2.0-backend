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

    // 默认返回10条所有的类型
    let data = await newsModel.findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('*')), 'count']],
        limit: ps,
        offset: pi
    });

    // 如果传递id则返回对应的id
    if (!isNaN(id)) {   // 查找对应的id
        data = await newsModel.findAll({
            attributes: [[sequelize.fn('COUNT', sequelize.col('*')), 'count']],
            where: { ref_type: id },
            limit: ps,
            offset: pi
        });
    }
    res.send({
        code: 1,
        msg: 'get news done',
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