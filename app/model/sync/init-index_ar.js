const { model } = require('../index_ar');
const sequelize = require('../../../conf/conn');
let getDateDiff = require('../../unit/formatTime');

// console.log("fun",getDateDiff("2016-03-28 10:30:22","2016-03-28 10:38:22","minute"))

const Sequelize = require('sequelize');
function init() {

    sequelize.query("SELECT * FROM gyms").spread(results => {
        var results = results;
        results = JSON.stringify(results);
        results = JSON.parse(results);
        // console.log(results);
        results.forEach(ele => {
            // console.log("first ele",ele)
            for (let key in ele) {
                if ( key == "html" ) {
                   ele["content"] = ele["html"];
                   delete ele["html"];
                }

                if ( key == "open_time" ) {
                    console.log("time",ele.open_time,"end",ele.open_time.slice(18,36))
                    ele["startTime"] = ele.open_time.slice(0,16);
                    ele["endTime"] = ele.open_time.slice(18,36);
                    ele["remainingTime"] = getDateDiff(ele.open_time.slice(0,16),ele.open_time.slice(18,36),"minute");
                    delete ele["open_time"];
                }


               
            }

            // console.log("second",ele)
        });

    })
}

init();