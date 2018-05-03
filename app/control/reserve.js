/**
 * area 控制器
 * @author xiaozhu
 */

const moment = require('moment');
const Sequelize = require('sequelize');
const { model: reserveModel } = require('../model/reserve.js');
const { model: gymModel } = require('../model/gym.js');
const { model: siteModel } = require('../model/site.js');

// 通过id号查询预订单
module.exports['reserve'] = async (req, res) => {
    let id = req.query.id;
    let gym = await gymModel.findById(id);
    res.send({
        code: 1,
        msg: 'get reserve',
        data: gym
    });
};