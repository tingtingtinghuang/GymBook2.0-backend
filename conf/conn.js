const conf = require('../conf/conf');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(conf.mysql.database, conf.mysql.user, conf.mysql.password, {
    host: conf.mysql.host,
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
    },
});

module.exports = sequelize;