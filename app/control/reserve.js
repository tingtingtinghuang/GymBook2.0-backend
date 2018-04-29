/**
 * area 控制器
 * @author xiaozhu
 */

const { model: reserveModel } = require('../model/reserve.js');

// 通过id号查询预订单
module.exports['reserve'] = async (req, res) => {
    let _id = req.query.id || req.body.id;
    console.log(_id);
    let data = await reserveModel.findAll({
        where: {
            id: _id
        }
    });
    res.send({
        code: 1,
        msg: 'get reserve done',
        data: data
    });
};