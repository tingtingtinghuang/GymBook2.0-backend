/**
 * news 控制器
 * @author soul
 */

const { model: newsModel } = require('../model/new');
const { model: newsTypeModel } = require('../model/new_type');

module.exports['index'] = async function (req, res) {
    let data = await newsModel.findAll();
    let query = {};
    if(req.query.id){
        query.id=parseInt(req.query.id);
    }
    res.send({
        code: 1,
        msg: 'get news done',
        data: data
    });
};

module.exports['newsType'] = async function (req, res) {
    let data = await newsTypeModel.findAll();
    res.send({
        code: 1,
        msg: 'get news type done',
        data: data
    });
};