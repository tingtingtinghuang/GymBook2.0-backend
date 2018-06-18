const express = require('express');
const router = express.Router();
const ctrl = require('../control/user.js');
// 登录
module.exports = function ({ auth, upload, app }) {
    app.use('/session', router);
    router.post('/', ctrl.session);
};