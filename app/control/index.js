// /**
//  * 首页 控制器
//  * @author soul
//  */

// const { model: indexAd } = require('../model/index_ad');
// const { model: indexAr } = require('../model/index_ar');
// const { model: indexSy } = require('../model/index_sy');
// const { model: type } = require('../model/type');
// const { model: sport } = require('../model/sport');
// const { model: gym } = require('../model/gym');
// const sequelize = require('sequelize');

// //  首页新闻
// module.exports['indexAd'] = async function (req, res) {
//     let data = await indexAd.findAll({ limit: 10 });

//     res.send({
//         code: 1,
//         msg: 'get index advertisement',
//         data: data
//     });
// };
// //  首页场馆
// module.exports['indexAr'] = async function (req, res) {
//     let data;
//     if (req.query.siteType && req.query.sportType) {
//         let siteType = req.query.siteType;
//         let sportType  =  req.query.sportType;
//         data = await gym.findAll({
//             include: [{
//                 model: type,
//                 where: { title: sequelize.col('ref_type') }
//             }, {
//                 model: sport,
//                 where: { title: sequelize.col('ref_sport') }
//             }]
//         });
//     } else {
//         data = await gym.findAll({ limit: 10 });
//     }

//     res.send({
//         code: 1,
//         msg: 'get index sites',
//         data: data
//     });
// };
// //  首页管理制度
// module.exports['indexSy'] = async function (req, res) {
//     let data = await indexSy.findAll({ limit: 10 });

//     res.send({
//         code: 1,
//         msg: 'get index advertisement',
//         data: data
//     });
// };