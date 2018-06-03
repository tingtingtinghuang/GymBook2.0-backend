/**
 * 场馆表
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    title: Sequelize.STRING,    // 标题
    html: Sequelize.TEXT, //  新闻内容
    view: Sequelize.INTEGER, // 浏览次数
    type: Sequelize.INTEGER // 新闻类型 0代表通知公告，1代表管理制度
};
const New = sequelize.define('new', conf);

module.exports = {
    conf,
    model: New
};