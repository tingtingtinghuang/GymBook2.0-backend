const { model } = require('../type');

function init() {
    model.sync({ force: true });
}

init();