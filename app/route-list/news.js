/**
 * index 路由
 * @author soul
 */

const express = require('express');
const router = express.Router();
const ctrl = require('../control/news');
const { checkSchema, validationResult } = require('express-validator/check');

module.exports = function ({ auth, upload, app }) {
    app.use('/news', router);
    router.get('/', checkSchema({
        type: {
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            optional: {
                nullable: true
            },
            in: ['query'],
            errorMessage: 'id 必须为数字类型',
            isInt: true,
            // Sanitizers can go here as well
            toInt: true
        },
        ps: {
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            optional: {
                nullable: true
            },
            in: ['query'],
            errorMessage: 'ps 必须为数字类型',
            isInt: true,
            // Sanitizers can go here as well
            toInt: true
        },
        pi: {
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            optional: {
                nullable: true
            },
            in: ['query'],
            errorMessage: 'pi 必须为数字类型',
            isInt: true,
            // Sanitizers can go here as well
            toInt: true
        },
    }), ctrl.index);
    // router.get('/type', ctrl.newsType);
    router.get('/:id', checkSchema({
        id: {
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            optional: {
                nullable: true
            },
            errorMessage: 'id 必须为数字类型',
            isInt: true,
            // Sanitizers can go here as well
            toInt: true
        },
    }), ctrl.content);
    // router.post('/', (req, res) => {
    //     console.log('req.body', req.body);
    //     res.send('2333');
    // });
};