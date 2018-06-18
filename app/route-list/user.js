const express = require('express');
const router = express.Router();
const ctrl = require('../control/user.js');
// 注册
module.exports = function ({ auth, upload, app }) {
    app.use('/user', router);
    router.post('/', ctrl.user);
};