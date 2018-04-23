/**
 * 场地类型
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    title: Sequelize.STRING,    // 标题
};

const NewType = sequelize.define('new_type', conf);


module.exports = {
    conf,
    model: NewType
};