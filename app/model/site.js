/**
 * 场地
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');
const { model: gymModel } = require('./gym');
const { model: sportModel } = require('./sport');

const conf = {
    siteNumber: Sequelize.INTEGER, // 场地号，比如1号场地，2号场地
    reserveTime: Sequelize.STRING, // 预约时间 如果time_type为0 该栏位类型为 2018-04-23 14:00 ~ 2018-04-23 15:00, 如果time_type为1 该栏位类型为 2018-04-23
    ref_gym: {
        type: Sequelize.INTEGER,
        references: {
            // 这是引用另一个模型
            model: gymModel,

            // 这是引用模型的列名称
            key: 'id',

            // 这声明什么时候检查外键约束。 仅限PostgreSQL。
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        } //  场地对应的展馆
    }
};

const Site = sequelize.define('site', conf);

module.exports = {
    conf,
    model: Site
};