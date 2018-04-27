/**
 * index 路由
 * @author soul
 */

const express = require('express');
const router = express.Router();
const ctrl = require('../control/news');

module.exports = function ({ auth, upload, app }) {
    app.use('/news', router);
    router.get('/', ctrl.index);
    router.post('/', (req, res) => {
        console.log('req.body', req.body);
        res.send('2333');
    });
};