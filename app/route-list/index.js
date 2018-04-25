/**
 * index 路由
 * @author soul
 */

const express = require('express');
const router = express.Router();
const ctrl = require('../control/index');

module.exports = function ({ auth, upload, app }) {
    app.use('/', router);
    router.get('/', ctrl.index);
};