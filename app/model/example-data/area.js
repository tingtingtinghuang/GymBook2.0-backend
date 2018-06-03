const { model: areaModel } = require('../area');
const sequelize = require('sequelize');

async function init() {
    let result = await areaModel.build({
        title: '南校区',
        title_eglish: 'south'
    }).save();

    let result2 = await areaModel.build({
        title: '北校区',
        title_eglish: 'north'

    }).save();
    let result3 = await areaModel.build({
        title: '珠海校区',
        title_eglish: 'zhuhai'
    }).save();
    let result4 = await areaModel.build({
        title: '东校区',
        title_eglish: 'east'
    }).save();
}


init();