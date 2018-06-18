const express = require('express');
const router = express.Router();
const ctrl = require('../control/gymReserve.js');

module.exports = function ({ auth, upload, app }) {
    app.use('/gymReserve', router);
    router.get('/', ctrl.gymReserve);
};