/**
 * gymList 控制器
 * @author carrollai
 */

const { model: areaModel } = require('../model/area');
const { model: gymModel } = require('../model/gym');

module.exports['gymList'] = async (req, res) => {
    let id = res.body.gymId;
    if (!id) {
        res.send({
            code: -1,
            msg: '场馆id必填',
        });
    }
    // let data = await areaModel.findAll();
    // let data0 = data[0].id;
    let test = await gymModel.findAll({
        where: {
            ref_area: {
                $like: id
            }
        }
    });
    console.log(test);
    res.send({
        code: 1,
        msg: 'get area done',
        data: test
    });
};