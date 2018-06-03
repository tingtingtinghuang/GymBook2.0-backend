const { model: userModel } = require('../user');
const sequelize = require('sequelize');

async function init() {
    let result = await userModel.build({
        account: 'admin',
        password: 'admin',
        role: 0,
        follow: null
    }).save();

}


init();