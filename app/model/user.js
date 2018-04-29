/**
 * 用户表
 */
const user = require('../../conf/conn');

const Sequelize = require('sequelize');

const conf = {
    account: {
        type: Sequelize.STRING, // 账号
        validate: {
            len: [6, 36]
        }
    },
    password: {
        type: Sequelize.STRING, // 密码
        validate: {
            len: [6, 18]
        }
    },
    nickname: {
        type: Sequelize.STRING, // 昵称
        validate: {
            max: 12
        }
    },
    gender: { // 0是无，1是男，2是女
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    avatar: Sequelize.STRING, // 头像
    role: { // 0是所有权限
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
};

const User = user.define('user', conf, {
    timestamps: false,
});

module.exports = {
    conf,
    model: User,
};

