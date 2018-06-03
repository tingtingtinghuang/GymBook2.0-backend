let conf = require('../conf/conf');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

if (env === 'production') {
    conf = require('../conf/conf-prod.js');
}

const sequelize = new Sequelize(conf.mysql.database, conf.mysql.user, conf.mysql.password, {
    host: conf.mysql.host,
    dialect: 'mysql',
    port: conf.mysql.port,
    define: {
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
    },
});

module.exports = sequelize;