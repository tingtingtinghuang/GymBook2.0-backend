const { model } = require('../sport');

function init() {
    model.sync({ force: true });
}

init();