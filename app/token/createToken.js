const jwt = require('jsonwebtoken');

module.exports = function(account, password) {
    const token = jwt.sign({
        account: account,
        password: password
    }, 'testtesttesttesthuangtting', {
        expiresIn: 30 * 60
    });

    return token;
};