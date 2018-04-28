const express = require('express');
const pug = require('pug');
const path = require('path');
let conf = require('./conf/conf');
const app = express();
const server = require('http').createServer(app);
const moment = require('moment');
const session = require('express-session');
const cookieSession = require('cookie-session');
const URI = require('urijs');
const JSONbig = require('json-bigint');
const Sequelize = require('sequelize');

global.conf = conf;

const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
    envs: ['node'],
    useEslintrc: true,
});

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
console.log('当前运行版本', process.version, '当前运行环境', env);

if (env === 'production') {
    conf = require('./conf/conf-prod');
}

// lint myfile.js and all files in lib/
const report = cli.executeOnFiles([path.join(__dirname, './app/**/*.js')]);

// get the default formatter
const formatter = cli.getFormatter();

// Also could do...
// var formatter = cli.getFormatter('compact');
// var formatter = cli.getFormatter('./my/formatter.js');

// output to console
let output;
if (env !== 'production') {
    output = formatter(report.results);
}

if (output) {
    console.error(output);
    return false;
}

server.listen(8991, () => {

    if (env !== 'production') {
        console.log('Production mode does not need to check eslint');
    }

    console.log('eslint done');
    console.log('start 8991 port');
});

global.soul = {

};

const sequelize = require('./conf/conn');
global.sequelize = sequelize;

app.set('env', env);

// pre set
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.set('conf', conf);

app.use(cookieSession({
    secret: conf.secret,
    maxAge: conf.maxAge,
    httpOnly: true
}));


app.use(`${conf.publicUrl}`, express.static(path.join(__dirname, 'public')));

app.locals.conf = conf;// 挂载conf至全局模板变量中
app.locals.moment = moment;
app.locals.JSONbig = JSONbig;

require('./app/route.js')(app, express);

process.on('unhandledRejection', (p) => {
    console.error('unhandledRejection', p);
});// 全局监听未处理的promise错误

process.on('uncaughtException', function (err) {
    console.error('uncaughtException', err);
});