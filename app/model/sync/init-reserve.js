const { model } = require('../reserve');

function init() {
    model.sync({ force: true });
}

init();