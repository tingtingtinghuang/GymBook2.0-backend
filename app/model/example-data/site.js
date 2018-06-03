const { model: siteModel } = require('../site');
const sequelize = require('sequelize');

async function init() {
    let result = await siteModel.build({
        ref_gym: 8,
        reserveTime: null,
        siteNumber: 1
    }).save();

    let result2 = await siteModel.build({
        ref_gym: 8,
        reserveTime: null,
        siteNumber: 2

    }).save();

}


init();