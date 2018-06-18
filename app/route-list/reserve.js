const express = require('express');
const router = express.Router();
const ctrl = require('../control/reserve.js');
const checkToken = require('../token/checkToken');

module.exports = function ({ auth, upload, app }) {
    app.use('/reserve', router);
    router.get('/', ctrl.index);
    router.post('/', checkToken, ctrl.addReserve);
};