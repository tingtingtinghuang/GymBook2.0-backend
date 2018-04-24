/**
 * area 路由
 * @author carrollcai
 */

const express = require('express');
const router = express.Router();
const ctrl = require('../control/area');

module.exports = function ({ auth, upload }) {
    router.get('/', ctrl.area);
    return router;
};