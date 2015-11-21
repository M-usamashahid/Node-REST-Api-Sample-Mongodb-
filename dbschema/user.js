
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;



var UserSchema = new Schema ({
    f_name        : String,
    l_name        : String,
    e_mail        : String,
    img_url       : String,
    mobile        : Number
});


var UserModel                  = mongoose.model('user', UserSchema);

exports.UserModel = function(){
    return UserModel;
};

