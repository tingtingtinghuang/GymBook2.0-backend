/**
 * newsList 控制器
 * @author Ting
 */

const { model: newsModel } = require('../model/new');
const sequelize = require('sequelize');

const { checkSchema, validationResult } = require('express-validator/check');
// newsList
module.exports['index'] = async function (req, res) {

    // valid
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ code: 0, msg: errors.mapped(), data: null });
    }

    let { type, ps = 10, pi = 0 } = req.query;

    const queryOps = {
        limit: ps,
        offset: pi * 10
    };

    // 查询详情
    if (!isNaN(type)) {
        queryOps['where'] = { type: type };
    }
    queryOps['attributes'] = ['id', 'title', 'view', 'createdAt'];

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
// content
module.exports['content'] = async function (req, res) {
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

// module.exports['newsType'] = async function (req, res) {
//     let data = await newsTypeModel.findAll();
//     res.send({
//         code: 1,
//         msg: 'get news type done',
//         data: data
//     });
// };