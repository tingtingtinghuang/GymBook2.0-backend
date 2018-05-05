const { model } = require('../index_ar');
function init() {
    model.sync({ force: true });
}

init();