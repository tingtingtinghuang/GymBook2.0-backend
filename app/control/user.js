/**
 * newsList 控制器
 * @author Ting
 */

const { model: userModel } = require('../model/user');
const sequelize = require('sequelize');
const createToken = require('../token/createToken');
const { checkSchema, validationResult } = require('express-validator/check');
// 登录
module.exports['session'] = async function (req, res) {

    // valid
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ code: 0, msg: errors.mapped(), data: null });
    }
    let account = req.body.account;
    let password = req.body.password;

    let token = createToken(account, password);
    let user = await userModel.findOne({
        where: {
            account: account
        }
    });
    res.cookie('token', token, { httpOnly: true });
    if (user !== null && user.password === password) {
        res.send({
            code: 1,
            msg: 'success'
            // token: token
        });
    }
    else {
        res.send({
            code: 0,
            msg: 'fail'
        });
    }

};
// 注册
module.exports['user'] = async function (req, res) {
    // valid

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ code: 0, msg: errors.mapped(), data: null });
    }

    let account = req.body.account;
    let password = req.body.password;
    let role = req.body.role;
    let user = await userModel.findOne({
        where: {
            account: account
        }
    });
    if (user === null) {
        await userModel.build({
            account: account,
            password: password,
            role: role,
            follow: ''
        }).save();
        res.send({
            code: 1,
            msg: 'success'
        });
    }
    else {
        res.send({
            code: 0,
            msg: 'fail'
        });
    }

};
