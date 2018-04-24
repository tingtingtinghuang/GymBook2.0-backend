/**
 * 场馆表
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
    title: Sequelize.STRING,    // 标题
    description: Sequelize.STRING,    // 描述
    html: Sequelize.TEXT, //  场地内容
    addr: Sequelize.STRING,   // 地址
    rank: Sequelize.INTEGER, // 评分
    time_type: { // 预约时间类型 0为按时间预约 1为按天预约 按天预约则无场地选项 按时间预约 不一定会有场地
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    price: Sequelize.STRING,    // 预约价格
    limit_num: Sequelize.INTEGER, // 最大预约数量 只有预约类型为按天预约 才行
    open_time: Sequelize.STRING,  // 开放时间 只有预约类型为按天预约才可以设定 比如 设定时间段为 2018-04-23 12:00 - 2018-04-23 14:00, 2018-04-23 15:00 - 2018-04-23 17:00
    limit_time: Sequelize.STRING, // 限制预约时间 如果time_type为0 该栏位类型为 2018-04-23 14:00 - 2018-04-23 15:00, 如果time_type为1 该栏位类型为 2018-04-23
    ref_type: Sequelize.INTEGER, // 外键 对应场地类型
    ref_area: Sequelize.INTEGER, // 外键 对应场地所属区域
    ref_sport: Sequelize.INTEGER, // 外键 对应场地所属运动类型
};

const Gym = sequelize.define('gym', conf);


module.exports = {
    conf,
    model: Gym
};