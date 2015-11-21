var mongoose    = require("mongoose");


var dburl = 'mongodb://test:test@ds055574.mongolab.com:55574/trialdb';
console.log("File Loading!");
exports.dbcon = exports.dbcon || mongoose.connect(dburl, function(err, db){
        if(err){
            console.log("Can not connect to DB");
            console.log(err);
        }
        else
        {
            console.log("Connected to DB");

        }
    });
