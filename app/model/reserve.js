/**
 * 用户预约表
*/

const sequelize = require('../../conf/conn');
const Sequelize = require('sequelize');

const conf = {
   
    user: Sequelize.INTEGER,      // 用户id
    reserveTime:Sequelize.STRING, // 预约时间 如果time_type为0 该栏位类型为 2018-04-23 14:00 ~ 2018-04-23 15:00, 如果time_type为1 该栏位类型为 2018-04-23
    time: Sequelize.STRING,      //  下单时间
    ref_gym: Sequelize.INTEGER,   // 外键 对应的预约展馆
    follow:Sequelize.INTEGER,  //关注的场馆，对应场馆的id
};

const Reserve = sequelize.define('reserve', conf);

module.exports = {
    conf,
    model: Reserve
};