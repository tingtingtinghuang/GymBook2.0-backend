/**
 * 首页通知广告列表
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    content: Sequelize.TEXT,    // 内容
    informTime: Sequelize.STRING,    // 通知时间
};

const IndexAd = sequelize.define('index_ad', conf);

module.exports = {
    conf,
    model: IndexAd
};