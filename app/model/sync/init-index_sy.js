const { model } = require('../index_sy');
function init() {
    model.sync({ force: true });
}

init();