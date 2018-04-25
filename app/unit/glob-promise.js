const glob = require('glob');


module.exports = function (path, options = {}) {

    return new Promise((resolve, reject) => {
        // options is optional
        glob(path, options, function (er, files) {

            if (er) {
                reject(er);
            } else {
                resolve(files);
            }
            // files is an array of filenames.
            // If the `nonull` option is set, and nothing
            // was found, then files is ["**/*.js"]
            // er is an error object or null.
        });
    });

};