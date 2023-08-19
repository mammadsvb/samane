const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const userSchema = new mongoose.Schema({
    firstname : {type:String},
    lastname  : {type:String},
    username  : {type:String , required : true ,unique : true},
    password  : {type:String , required : true},
});

userSchema.plugin(timestamp);

const User = mongoose.model("User",userSchema);

module.exports = User;