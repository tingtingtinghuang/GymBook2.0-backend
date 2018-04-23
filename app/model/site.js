/**
 * 场地
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    title: Sequelize.STRING,    // 标题
    ref_gym: Sequelize.INTEGER //  场地对应的展馆
};

const Site = sequelize.define('site', conf);

module.exports = {
    conf,
    model: Site
};