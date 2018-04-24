/**
 * news 控制器
 * @author soul
 */

const { model: newsModel } = require('../model/new');

module.exports['index'] = async function (req, res) {
    let data = await newsModel.findAll();
    res.send({
        code: 1,
        msg: 'get news done',
        data: data
    });
};