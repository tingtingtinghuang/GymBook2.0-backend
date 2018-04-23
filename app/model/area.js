/**
 * 校区类型
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    title: Sequelize.STRING,    // 标题
};

const Area = sequelize.define('area', conf);


module.exports = {
    conf,
    model: Area
};