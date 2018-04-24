const cors = require('cors');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const multer = require('multer');
const parseForm = bodyParser.urlencoded({ extended: false });
const csrfProtection = csrf({ cookie: true });
const storage = multer.memoryStorage();// 上传文件只保存到内存 buffer
const upload = multer({ storage: storage });

const indexControl = require('./control/index');

const indexRouteList = require('./route-list/index');

let fs = require('fs');
let path = require('path');

module.exports = function (app, express, acl) {
    let totalPath = path.join(__dirname, './route-list');
    // 读取router-list文件下的路径，对应路径就是路由路径
    fs.readdir(totalPath, (err, dirs) => {
        if (err) throw err;
        let routeList = dirs
            .filter(val => val.includes('.js'))
            .forEach(val => {
                const func = require('./route-list/' + val);
                const name = '/' + val.split('.js')[0];
                const route = func({ upload });
                app.use(name, route);
            });

        app.use('/', cors());
        app.use(cookieParser());
        app.use(parseForm);
        app.use(csrfProtection);// 所有的post请求都会验证csrf 具体参考 {@link https://www.npmjs.com/package/csurf}

        app.use((req, res, next) => {
            res.locals.requestUrl = req.url;
            res.locals.csrfToken = req.csrfToken();
            next();
        });


        const indexRoute = indexRouteList({ upload });// index
        app.use(indexRoute);

        // catch 404 and forward to error handler
        app.use(function (req, res, next) {
            const err = new Error('Not Found');
            err.status = 404;
            next(err);
        });

        // error handler
        app.use(function (err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.send({
                code: -1,
                msg: 'error',
                data: err
            }); // 替换为api返回
            // web storm debug
            // console.error('express catch error', err);
        });
    });
};