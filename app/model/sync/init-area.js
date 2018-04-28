const { model } = require('../area');

function init() {
    model.sync({ force: true });
}

init();