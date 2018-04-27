/**
 * area 控制器
 * @author carrollai
 */

const { model: areaModel } = require('../model/area');

module.exports['area'] = async (req, res) => {
    let data = await areaModel.findAll();
    res.send({
        code: 1,
        msg: 'get area done',
        data: data
    });
};