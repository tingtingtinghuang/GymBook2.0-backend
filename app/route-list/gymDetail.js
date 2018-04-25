/**
 * gymDetail 路由
 * @author carrollcai
 */

const express = require('express');
const router = express.Router();
const ctrl = require('../control/gymDetail');

module.exports = function ({ auth, upload, app }) {
    app.use('/gymDetail', router);
    router.get('/', ctrl.gymDetail);
    router.post('/', ctrl.gymDetail);
};