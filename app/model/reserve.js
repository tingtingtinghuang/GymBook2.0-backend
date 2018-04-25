/**
 * 用户预约表
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    title: Sequelize.STRING,      // 标题
    user: Sequelize.INTEGER,      // 用户id
    time_type: { // 预约时间类型 0为按时间预约 1为按天预约 按天预约则无场地选项
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    time: Sequelize.STRING,       // 预约时间 如果time_type为0 该栏位类型为 2018-04-23 14:00 ~ 2018-04-23 15:00, 如果time_type为1 该栏位类型为 2018-04-23
    buy_num: Sequelize.INTEGER,   // 购买的数量 只有ref_gym.open_time 为当天的时间并非时间段选项的时候 并且 time_type 为1的时候 才有效 默认设置为1 即可
    ref_gym: Sequelize.INTEGER,   // 外键 对应的预约展馆
    ref_site: Sequelize.INTEGER,  // 外键 对应的预约场地
};

const Reserve = sequelize.define('reserve', conf);

module.exports = {
    conf,
    model: Reserve
};