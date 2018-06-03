const { model: sportModel } = require('../sport');
const sequelize = require('sequelize');

async function init() {
    let result = await sportModel.build({
        title: '游泳',
        title_eglish: 'swimming',
        logo: null
    }).save();

    let result2 = await sportModel.build({
        title: '乒乓',
        title_eglish: 'pingpong',
        logo: null
    }).save();
    let result3 = await sportModel.build({
        title: '健身',
        title_eglish: 'fitness',
        logo: null
    }).save();
    let result4 = await sportModel.build({
        title: '羽毛球',
        title_eglish: 'badminton',
        logo: null
    }).save();
    let result5 = await sportModel.build({
        title: '足球',
        title_eglish: 'football',
        logo: null
    }).save();
    let result6 = await sportModel.build({
        title: '网球',
        title_eglish: 'tennis',
        logo: null
    }).save();
    let result7 = await sportModel.build({
        title: '篮球',
        title_eglish: 'basketball',
        logo: null
    }).save();
}


init();