const express = require('express');
const router = express.Router();
const ctrl = require('../control/gymInfoList');

module.exports = function ({ auth, upload, app }) {
    app.use('/gymInfoList', router);
    router.get('/', ctrl.gymInfoList);
    router.post('/', ctrl.gymInfoList);
};