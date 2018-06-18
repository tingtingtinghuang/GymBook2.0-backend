/**
 * bookCenter 控制器
 * @author Ting
 */

const { model: gymModel } = require('../model/gym');
const { model: sportModel } = require('../model/sport');
const sequelize = require('sequelize');

const { checkSchema, validationResult } = require('express-validator/check');
// gymlist
module.exports['index'] = async function (req, res) {

    // valid
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ code: 0, msg: errors.mapped(), data: null });
    }

    const areas = ['', 'N', 'B', 'Z', 'D'];
    let gymlist = [];
    const queryOps = {
        attributes: ['id', 'title', 'addr', 'rank', 'ref_sport'],

    };
    let result = {};
    for (let i = 1; i <= 4; i++) {
        queryOps['where'] = { ref_area: i };
        let gyms = await gymModel.findAll(queryOps);
        result[areas[i]] = gyms;
    }

    // 计算count
    res.send({
        code: 1,
        msg: 'get bookcenter',
        data: result
    });
};
