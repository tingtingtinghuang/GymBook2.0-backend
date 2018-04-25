/**
 * gymList 路由
 * @author carrollcai
 */

const express = require('express');
const router = express.Router();
const ctrl = require('../control/gymList');

module.exports = function ({ auth, upload, app }) {
    app.post('/gymList', router);
    router.get('/', ctrl.gymList);
};