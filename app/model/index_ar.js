/**
 * 首页场地列表
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    content: Sequelize.TEXT,    // 内容
    startTime: Sequelize.STRING,    // 开始时间
    endTime: Sequelize.STRING,    // 开始时间
    remainingTime: Sequelize.INTEGER,    // 剩余时间
};

const IndexAr = sequelize.define('index_ar', conf);

module.exports = {
    conf,
    model: IndexAr
};