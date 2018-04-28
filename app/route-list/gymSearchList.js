/**
 * gymSearchList 模块的路由
 * @type {createApplication}
 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ctrlGymSearchList = require('../control/gymSearchList');

module.exports = ({ auth, upload, app }) => {
    app.use('/gymSearchList', router);
    app.use(bodyParser.json());
    router.get('/', ctrlGymSearchList.gymSearchList);
};