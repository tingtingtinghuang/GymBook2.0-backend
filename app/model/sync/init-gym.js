const { model } = require('../gym');
function init() {
    model.sync({ force: true });
}

init();