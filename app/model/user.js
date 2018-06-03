/**
 * 用户表
 */
const user = require('../../conf/conn');

const Sequelize = require('sequelize');

const conf = {
    account: {
        type: Sequelize.STRING, // 账号
        validate: {
            len: [5, 25]
        }
    },
    password: {
        type: Sequelize.STRING, // 密码
        validate: {
            len: [5, 18]
        }
    },
    role: { // 0是所有权限
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    follow: { // 0是所有权限
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
    }
};

const User = user.define('user', conf, {
    timestamps: false,
});

module.exports = {
    conf,
    model: User,
};

