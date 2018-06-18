/**
 * area 控制器
 * @author xiaozhu
 */

const moment = require('moment');
const Sequelize = require('sequelize');
const { model: reserveModel } = require('../model/reserve.js');
const { model: gymModel } = require('../model/gym.js');
const { model: siteModel } = require('../model/site.js');
const { model: reservesModel } = require('../model/reserve');

// index查询场地的订单
module.exports['index'] = async (req, res) => {

    let { id }  = req.query;
    const queryOps = {
        'where': { id: id }
    };

    queryOps['attributes'] = ['id', 'title', 'description', 'siteNumber', 'addr', 'rank', 'open_time', 'time_type', 'status', 'price'];

    let gym = await gymModel.findOne(queryOps);
    if (gym.time_type === 0) {
        delete queryOps['id'];
        queryOps['where'] = {
            ref_gym: id
        };
        queryOps['attributes'] = ['id', 'reserveTime'];

        let data = await siteModel.findAll(queryOps);

        res.send({
            code: 1,
            msg: 'get reserve',
            data: {
                gym,
                list: data
            }
        });
    }
    else {

        res.send({
            code: 1,
            msg: 'get reserve',
            data: {
                gym,
                // list: {
                //     status: gym.status,
                //     open_time: gym.open_time
                // }
            }
        });
    }

};

// 新增订单接口
module.exports['addReserve'] = async (req, res) => {
    let userId  = req.body.userId;
    let reserveTime = req.body.reserveTime;
    let gymId = req.body.id;
    let siteId = req.body.siteId;


    let gym = await gymModel.findOne({
        where: {
            id: gymId
        }
    });

    if (gym.time_type === 1) {
        let dateReg = new RegExp('([\\d]):' + reserveTime);

        // 对应的stock--，如果需要更新对应status
        let index = dateReg.exec(gym.open_time)[1];
        let stockReg = new RegExp(index + ':(\\d+)');
        let stock = stockReg.exec(gym.stock)[1];

        let statusReg = new RegExp(index + ':(\\d+)');
        let status = statusReg.exec(gym.status)[1];


        if (status && stock > 0) {
            stock--;
            let newStock = gym.stock.replace(stockReg, index + ':' + stock);
            try {
                await gymModel.update({
                    stock: newStock
                }, {
                    where: {
                        id: gymId
                    }
                });
                await reservesModel.build({
                    user: userId,
                    time: moment().format('YYYY-MM-DD'),
                    ref_gym: gymId
                }).save();
                res.send({
                    'code': 1,
                    'msg': 'success'
                });

            }
            catch (err) {
                console.log(err);
                res.send({
                    'code': 0,
                    'msg': 'fail'
                });
            }
            // console.log(gym.stock);
        }
        // else if (String(stock) === '0') {
        //     status = 0;
        //     let newStatus = gym.status.replace(statusReg, index + ':' + status);
        //     try {
        //         gymModel.update({
        //             status: newStatus
        //         }, {
        //             where: {
        //                 id: gymId
        //             }
        //         });
        //     }
        //     catch (err) {
        //         console.log(err);
        //         res.send({
        //             'code': 0,
        //             'msg': 'fail'
        //         });
        //     }

        // }
        else {
            res.send({
                'code': 0,
                'msg': 'fail'
            });
        }
    }
    else {
        try {
            let site = await siteModel.findOne({
                where: {
                    id: siteId
                }
            });
            await siteModel.update({
                reserveTime: site.reserveTime + ',' + reserveTime
            }, {
                where: {
                    id: siteId
                }
            });
            await reservesModel.build({
                user: userId,
                time: moment().format('YYYY-MM-DD'),
                ref_gym: gymId
            }).save();
            res.send({
                'code': 1,
                'msg': 'success'
            });
        }
        catch (err) {
            res.send({
                'code': 0,
                'msg': 'fail'
            });
        }

    }



};
