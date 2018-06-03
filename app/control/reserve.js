/**
 * area 控制器
 * @author xiaozhu
 */

const moment = require('moment');
const Sequelize = require('sequelize');
const { model: reserveModel } = require('../model/reserve.js');
const { model: gymModel } = require('../model/gym.js');
const { model: siteModel } = require('../model/site.js');

// /area/type 判断time_type
module.exports['index'] = async (req, res) => {
    let area = req.params.area;
    let type = req.params.type;
    // let gym = await gymModel.findById(id);
    // res.send({
    //     code: 1,
    //     msg: 'get reserve',
    //     data: gym
    // });
};