const cors = require('cors');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const multer = require('multer');
const parseForm = bodyParser.urlencoded({ extended: false });
const csrfProtection = csrf({ cookie: true });
const storage = multer.memoryStorage();// 上传文件只保存到内存 buffer
const upload = multer({ storage: storage });
const globPromise = require('./unit/glob-promise');

let fs = require('fs');
let path = require('path');

module.exports = async function (app, express, acl) {

    app.use('/', cors());
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(parseForm);
    // app.use(csrfProtection);// 所有的post请求都会验证csrf 具体参考 {@link https://www.npmjs.com/package/csurf}

    app.use((req, res, next) => {
        res.locals.requestUrl = req.url;
        // res.locals.csrfToken = req.csrfToken();
        next();
    });

    // 挂载路由
    const totalPath = path.join(__dirname, './route-list/*.js');

    let routerFunction = await globPromise(totalPath);

    for (let i of routerFunction) {
        require(i)({ upload, app });
    }
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

};