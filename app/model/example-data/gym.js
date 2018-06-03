const { model: gymModel } = require('../gym');
const sequelize = require('sequelize');

async function init() {
    let result = await gymModel.build({
        'title': '北校区乒乓球室',
        'description': '中山大学英东体育馆羽毛球场位于英东体育馆内，共有8片球场，与排球共用。英东羽毛球场开放时间从8：00至22：00时，非排球训练和体育教学时段均可定场，全天收费。',
        'html': null,
        'addr': '地址：乒乓球室',
        'rank': 3.7,
        'time_type': 0,
        'status': '0:0',
        'logo': null,
        'price': '11',
        'stock': null,
        'open_time': '0:2018-04-23 07:00 ~  21:00',
        'ref_area': 2,
        'ref_sport': 2,
    }).save();

    let result2 = await gymModel.build({
        'title': '东校区乒乓球室',
        'description': '乒乓球室',
        'html': null,
        'addr': '地址：乒乓球室',
        'rank': 3.7,
        'time_type': 0,
        'status': '0:0',
        'logo': null,
        'price': '11',
        'stock': null,
        'open_time': '0:2018-04-23 07:00 ~  21:00',
        'ref_area': 4,
        'ref_sport': 2,

    }).save();
    let result3 = await gymModel.build({
        'title': '东校区游泳馆',
        'description': '东校园游泳池暑期开放时间：6：30-8：00，16：30-18：00，19：30-21：00。 可以网上预订和现场扣预订，网上可提前一天预订。 建议先网上预订，现场验证可节省入场时间。如现场预订需输入校园卡密码，会增加入场时间。',
        'html': null,
        'addr': '场地地址： 综合训练馆',
        'rank': 3.7,
        'time_type': 1,
        'status': '0:0 1:0',
        'logo': null,
        'price': '11',
        'stock': '0:200 1:200',
        'open_time': '0:2018-04-23 12:00 ~  14:00, 1:2018-04-24 15:00 ~ 17:00',
        'ref_area': 4,
        'ref_sport': 1,
    }).save();
    let result4 = await gymModel.build({
        'title': '东校区羽毛球馆',
        'description': '中山大学英东体育馆羽毛球场位于英东体育馆内，共有8片球场，与排球共用。英东羽毛球场开放时间从8：00至22：00时，非排球训练和体育教学时段均可定场，全天收费。',
        'html': null,
        'addr': '地址：羽毛球馆',
        'rank': 3.7,
        'time_type': 0,
        'status': '0:0',
        'logo': null,
        'price': '11',
        'stock': null,
        'open_time': '0:2018-04-23 07:00 ~  21:00',
        'ref_area': 4,
        'ref_sport': 4
    }).save();
    let result5 = await gymModel.build({
        'title': '东校区网球场',
        'description': '网球场',
        'html': null,
        'addr': '地址:网球场',
        'rank': 3.7,
        'time_type': 0,
        'status': '0:0',
        'logo': null,
        'price': '11',
        'stock': null,
        'open_time': '0:2018-04-23 07:00 ~  21:00',
        'ref_area': 4,
        'ref_sport': 6
    }).save();
    let result6 = await gymModel.build({
        'title': '东校区健身房',
        'description': '健身房',
        'html': null,
        'addr': '场地地址： 综合训练馆',
        'rank': 3.7,
        'time_type': 1,
        'status': '0:0 1:0',
        'logo': null,
        'price': '11',
        'stock': '0:20 1:20',
        'open_time': '0:2018-04-23 12:00 ~  14:00, 1:2018-04-24 15:00 ~ 17:00',
        'ref_area': 4,
        'ref_sport': 3,
    }).save();
    let result7 = await gymModel.build({
        'title': '南校区篮球场',
        'description': '东区篮球场',
        'html': null,
        'addr': '地址:篮球场',
        'rank': 3.7,
        'time_type': 0,
        'status': '0:0',
        'logo': null,
        'price': '11',
        'stock': null,
        'open_time': '0:2018-04-23 07:00 ~  21:00',
        'ref_area': 1,
        'ref_sport': 7
    }).save();
    let result8 = await gymModel.build({
        'title': '南校区足球场',
        'description': '东区篮球场',
        'html': null,
        'addr': '地址:篮球场',
        'rank': 3.7,
        'time_type': 0,
        'status': '0:0',
        'logo': null,
        'price': '11',
        'stock': null,
        'open_time': '0:2018-04-23 07:00 ~  21:00',
        'ref_area': 1,
        'ref_sport': 5
    }).save();
    let result9 = await gymModel.build({
        'title': '南校区羽毛球场',
        'description': '东区羽毛球场',
        'html': null,
        'addr': '地址:羽毛球场',
        'rank': 3.7,
        'time_type': 0,
        'status': '0:0',
        'logo': null,
        'price': '11',
        'stock': null,
        'open_time': '0:2018-04-23 07:00 ~  21:00',
        'ref_area': 1,
        'ref_sport': 4
    }).save();
    let result10 = await gymModel.build({
        'title': '珠海游泳馆',
        'description': '珠海校园游泳池暑期开放时间：6：30-8：00，16：30-18：00，19：30-21：00。 可以网上预订和现场扣预订，网上可提前一天预订。 建议先网上预订，现场验证可节省入场时间。如现场预订需输入校园卡密码，会增加入场时间。',
        'html': null,
        'addr': '场地地址： 综合训练馆',
        'rank': 3.7,
        'time_type': 1,
        'status': '0:0 1:0',
        'logo': null,
        'price': '11',
        'stock': '0:200 1:200',
        'open_time': '0:2018-04-23 06:00 ~  08:00, 1:2018-04-24 16:00 ~ 19:00',
        'ref_area': 3,
        'ref_sport': 1,
    }).save();
}


init();