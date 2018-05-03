/**
 * area 控制器
 * @author xiaozhu
 */

const moment = require('moment');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { model: reserveModel } = require('../model/reserve.js');
const { model: gymModel } = require('../model/gym.js');
const { model: siteModel } = require('../model/site.js');

// 通过gym id号查询到该场馆的所有场地的订单
module.exports['gymReserve'] = async (req, res) => {
    // 当前时间
    let nowDate = moment().format('YYYY-MM-DD');
    let { id, date = nowDate } = req.query;
    console.log(date);
    let gym = await gymModel.findById(id);
    // 预约时间类型 按天预约则无场地选项
    if (gym.time_type === 1) {
        res.send({
            code: 1,
            msg: 'get reserve about this gym',
            data: {
                title: gym.title,
                description: gym.description,
                html: gym.html,
                addr: gym.addr,
                rank: gym.rank,
                status: gym.status,
                limit_time: gym.limit_time,
                open_time: gym.open_time,
                limit_num: gym.limit_num,
                buy_limit_num: gym.buy_limit_num
            }
        });
        return;
    }
    let site = await siteModel.findAndCountAll({
        where: {
            ref_gym: id
        },
        attributes: ['id', 'title'],
        order: [
            ['id', 'asc']
        ]
    });
    let reserve = await reserveModel.findAndCountAll({
        where: {
            ref_gym: id
        },
        order: [
            ['time', 'asc']
        ]
    });
    let dayList = [];
    let siteReserveList = [];
    site.rows.forEach(item => {
        let site_reserve = [];  // 每块场地的订单
        reserve.rows.forEach((res, index) => {
            let time_arr = res.time.split(' ');
            if (time_arr[0] === date && res.ref_site === item.id) {
                site_reserve.push(res.time);
            }
        });
        siteReserveList.push({
            site: item,
            reservedTime: site_reserve
        });
    });
    res.send({
        code: 1,
        msg: 'success',
        data: {
            count: site.count,
            gym: {
                title: gym.title,
                description: gym.description,
                html: gym.html,
                addr: gym.addr,
                rank: gym.rank,
                status: gym.status,
                limit_time: gym.limit_time,
                open_time: gym.open_time,
                buy_limit_num: gym.buy_limit_num
            },
            list: siteReserveList
        }
    });
};
