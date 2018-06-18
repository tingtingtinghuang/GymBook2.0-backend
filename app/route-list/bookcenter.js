/**
 * gymDetail 路由
 * @author xiaozhu
 */

const express = require('express');
const router = express.Router();
const ctrl = require('../control/bookcenter');

module.exports = function ({ auth, upload, app }) {
    app.use('/bookcenter', router);
    router.get('/', ctrl.index);
};