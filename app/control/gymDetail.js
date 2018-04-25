/**
 * gymDetail 控制器
 * @author carrollai
 */

const { model: gymModel } = require('../model/gym');

module.exports['gymDetail'] = async (req, res) => {
    let id = req.body.id;
    if (!id) {
        res.send({
            code: -1,
            msg: '场馆id必填',
        });
    }
    let gymObj = await gymModel.findAll({
        where: {
            id: {
                $like: id
            }
        }
    });
    res.send({
        code: 1,
        msg: 'success',
        data: gymObj[0]
    });
};