
const { model: reserveModel } = require('../reserve');
const sequelize = require('sequelize');

async function init() {
    let result = await reserveModel.build({
        user: 1,
        time: '2018-6-3',
        ref_gym: '1'

    }).save();
}


init();