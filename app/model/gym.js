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
    time_type: { // 预约时间类型 0为按时间预约 1为按天预约 按天预约则无场地选项
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    status: { // 场馆是否可预订，如果time_type=0,status=0/1;如果time_type=1,status="0 1"，也就是根据open_time字段的数量来显示是否可用
        type: Sequelize.STRING,
        allowNull: false
    },
    logo: Sequelize.STRING, // 场地的logo图片
    price: Sequelize.STRING,    // 预约价格
    buy_limit_num: Sequelize.INTEGER, // 场地库存，根据库存信息计算按天预约的场是否还有位置
    open_time: Sequelize.STRING,  // 开放时间,格式为"2018-04-23 12:00 ~  14:00"以逗号分隔，如果按天预约，这个字段会返回类似:“2018-04-23 12:00 ~  14:00, 2018-04-24 15:00 ~ 17:00”. 
    ref_type: Sequelize.INTEGER, // 外键 对应场地类型
    ref_area: Sequelize.INTEGER, // 外键 对应场地所属区域
    ref_sport: Sequelize.INTEGER, // 外键 对应场地所属运动类型
};

const Gym = sequelize.define('gym', conf);


module.exports = {
    conf,
    model: Gym
};