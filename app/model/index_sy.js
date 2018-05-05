/**
 * 首页管理制度列表
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    content: Sequelize.TEXT,    // 内容
    systemTime: Sequelize.STRING,    // 系统时间
};

const IndexSy = sequelize.define('index_sy', conf);

module.exports = {
    conf,
    model: IndexSy
};