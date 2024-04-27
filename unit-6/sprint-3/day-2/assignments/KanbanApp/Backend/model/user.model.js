const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","normal_user"],
        default:"normal_user"
    }
},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema);

module.exports = {
    UserModel
}