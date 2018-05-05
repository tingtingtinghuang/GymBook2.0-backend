const { model } = require('../index_ad');
function init() {
    model.sync({ force: true });
}

init();