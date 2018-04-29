const { model } = require('../new_type');

function init() {
    model.sync({ force: true });
}

init();