/**
 * 场馆表
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    title: Sequelize.STRING,    // 标题
    description: Sequelize.STRING,    // 描述
    html: Sequelize.TEXT, //  新闻内容
    view: Sequelize.INTEGER, // 浏览次数
    ref_type: Sequelize.INTEGER, // 外键 对应新闻类型
};

const New = sequelize.define('new', conf);

module.exports = {
    conf,
    model: New
};