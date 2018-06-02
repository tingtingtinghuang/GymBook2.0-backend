/**
 * 场地
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    type: Sequelize.STRING,    // 运动类型，可能的取值有"游泳","乒乓球","羽毛球","健身房","网球"，“足球”
    ref_gym: Sequelize.INTEGER //  场地对应的展馆
};

const Site = sequelize.define('site', conf);

module.exports = {
    conf,
    model: Site
};