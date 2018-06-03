/**
 * 运动类型
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    title: Sequelize.STRING,    // 标题
    title_eglish: Sequelize.STRING,
    logo: Sequelize.STRING, // 游泳馆的icon图片
};

const Sport = sequelize.define('sport', conf);

module.exports = {
    conf,
    model: Sport
};