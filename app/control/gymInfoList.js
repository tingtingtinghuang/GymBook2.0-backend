/**
 * gymInfoList 控制器
 * @author carrollai
 */

const { model: areaModel } = require('../model/area');
const { model: gymModel } = require('../model/gym');

module.exports['gymInfoList'] = async (req, res) => {
    // 查出所有校区
    let area = await areaModel.findAll();

    // 查出所有场馆 ref_area与id对应
    let gym = await gymModel.findAll();

    let areaList = [];
    area.forEach((val) => {
        let id = val.id;
        let turnGym = gym.filter(val => val.ref_area === id);
        areaList.push({
            id: val.id,
            title: val.title,
            children: turnGym
        });
    });
    res.send({
        code: 1,
        msg: 'success',
        data: areaList
    });
};