/**
 * gymDetail 控制器
 * @author carrollai
 */

const { model: gymModel } = require('../model/gym');

// 场馆信息
module.exports['gymDetail'] = async (req, res) => {
    let method = req.method;
    switch (method) {
        case 'GET':
            _get(req, res);
            break;
        case 'POST':
            _create(req, res);
            break;
        case 'PUT':
            _update(req, res);
            break;
        case 'DELETE':
            _delete(req, res);
            break;
        default:
            break;
    }
};

const _get = async (req, res) => {
    const id = req.param.id;
    if (!id) {
        res.send({
            code: -1,
            msg: '场馆id必填',
        });
    }
    const gymObj = await gymModel.findAll({
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

// 修改一个场馆信息
const _update = async (req, res) => {
    validate(req, res);

    await gymModel.update({
        ...req.body
    },
    {
        where: {
            id: {
                $like: req.body.id
            }
        }
    });
    res.send({
        code: 1,
        msg: '更新场馆信息成功',
    });
};

// 新增一个场馆信息
const _create = async (req, res) => {
    if (req.body.id) {
        fail(res, '创建数据里不能存在id');
    }
    validate(req, res);
    console.log(req.body);
    await gymModel.create(req.body);
    res.send({
        code: 1,
        msg: '创建场馆信息成功',
    });
};

const _delete = async (req, res) => {
    let id = req.body.id;
    if (!id) {
        res.send({
            code: -1,
            msg: '场馆id必填',
        });
    }
    let gymObj = await gymModel.destroy({
        where: {
            id: {
                $like: id
            }
        }
    });
    res.send({
        code: 1,
        msg: '删除场馆成功',
    });
};


function validate(req, res) {
    if (!req.body.title) fail(res, '场馆标题必填');
    if (!req.body.description) fail(res, '场馆描述必填');
    if (!req.body.addr) fail(res, '场馆地址必填');
    if (!req.body.price) fail(res, '场馆预约价格必填');
    if (!req.body.ref_type) fail(res, '场馆对应场地类型必填');
    if (!req.body.ref_area) fail(res, '场馆对应场地所属区域必填');
    if (!req.body.ref_sport) fail(res, '场馆对应场地所属运动类型必填');
}

function fail(res, msg) {
    res.send({
        code: -1,
        msg: msg,
    });
}