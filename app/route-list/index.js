/**
 * index 路由
 * @author soul
 */

const express = require('express');
const router = express.Router();
const ctrl = require('../control/index');
const { checkSchema } = require('express-validator/check');

module.exports = function ({ auth, upload, app }) {
    app.use('/', router);
    router.get('/advertisement', ctrl.indexAd);
    router.get('/areaList', ctrl.indexAr);
    router.get('/managementSystem', ctrl.indexSy);
};