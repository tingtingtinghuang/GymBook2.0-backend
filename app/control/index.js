/**
 * 首页 控制器
 * @author soul
 */

module.exports['index'] = async function (req, res) {
    res.send({
        code: 1,
        msg: 'ok',
        data: {
            user: 'hello world'
        }
    });
};