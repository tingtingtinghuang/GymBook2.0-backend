const path = require('path');
const globPromise = require('../../unit/glob-promise');
let fs = require('fs');

async function init() {
    // 挂载路由
    const totalPath = path.join(__dirname, './init-*.js');

    let routerFunction = await globPromise(totalPath);

    for (let i of routerFunction) {
        require(i);
    }
}

init();
