const { model } = require('../site');

function init() {
    model.sync({ force: true });
}

init();