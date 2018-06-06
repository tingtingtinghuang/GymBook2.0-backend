/**
 * gymDetail 路由
 * @author xiaozhu
 */

const express = require('express');
const router = express.Router();
const ctrl = require('../control/reserve.js');

module.exports = function ({ auth, upload, app }) {
    app.use('/reserve', router);
    router.get('/:id', ctrl.index);
    router.post('/:id', ctrl.addReserve);
};