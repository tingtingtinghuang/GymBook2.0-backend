const { model } = require('../new');

function init() {
    model.sync({ force: true });
}

init();
