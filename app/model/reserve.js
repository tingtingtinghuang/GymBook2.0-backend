/**
 * 用户预约表
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');
const { model: gymModel } = require('./gym');
const { model: userModel } = require('./user');

const conf = {

    user: {
        type: Sequelize.INTEGER,
        references: {
            // 这是引用另一个模型
            model: userModel,

            // 这是引用模型的列名称
            key: 'id',

            // 这声明什么时候检查外键约束。 仅限PostgreSQL。
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },      // 用户id
    time: Sequelize.STRING,      //  下单时间

    ref_gym: {
        type: Sequelize.INTEGER,
        references: {
            // 这是引用另一个模型
            model: gymModel,

            // 这是引用模型的列名称
            key: 'id',

            // 这声明什么时候检查外键约束。 仅限PostgreSQL。
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },   // 外键 对应的预约展馆

};

const Reserve = sequelize.define('reserve', conf);

module.exports = {
    conf,
    model: Reserve
};