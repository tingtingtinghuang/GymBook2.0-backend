const jwt = require('jsonwebtoken');

module.exports = async (ctx, next) => {

    const authorization = ctx.get('Authorization');
    if (authorization === '') {
        ctx.status = 401;
        ctx.body = {
            message: 'token验证失败'
        };
    }
    // 验证token
    const token = authorization.split(' ')[1];

    let tokenContent;
    try {

        tokenContent = await jwt.verify(token, 'testtesttesttesthuangtting');

        ctx.state.user_id = tokenContent.user_id;
        ctx.state.role = tokenContent.role;
        await next();
    }
    catch (err)
    {
        console.log(err);
        console.log('验证失败checkToken');

        ctx.status = 401;
        ctx.body = {
            message: 'token验证失败'
        };
    }

};