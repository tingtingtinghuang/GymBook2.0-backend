/**
 * 场馆搜索模块
 *
 */
const { model: areaModel } = require('../model/area');
const { model: gymModel } = require('../model/gym');
const Sequelize = require('sequelize');
const pinyin = require('pinyin');
const Op = Sequelize.Op;

/**
 *  场馆列表的查看
 */
module.exports['gymSearchList'] = async (req, res, next) => {
    let searchKey = req.query.searchKey;
    let typeId = parseInt(req.query.typeId, 10);
    let areaId = parseInt(req.query.areaId, 10);
    let whereParam = {};
    req.query.typeId !== '' && (whereParam.ref_type = typeId);
    req.query.areaId !== '' && (whereParam.ref_area = areaId);
    if (req.query.searchKey !== '') {
        whereParam.title = {
            [Op.like]: '%' + searchKey + '%'
        };
    }
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let gymList = await gymModel.findAll({
        where: whereParam
    });
    let result = {};
    gymList.forEach(item => {
        let firstLetter = pinyin(item.title, {
            style: pinyin.STYLE_NORMAL, // 设置拼音风格,不带拼音
        })[0][0].substr(0, 1);
        console.log(firstLetter);
        for (let letter of arr) {
            if (letter.toLowerCase() === firstLetter) {
                !result[letter] && (result[letter] = []);
                result[letter].push(item);
            }
        }
    });
    console.log(gymList);
    res.send({
        code: 1,
        msg: 'success',
        data: result
    });
};