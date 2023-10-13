const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,

        },
        password:{
            type: String,
            require:true
        }
    }
)
const UserModel = mongoose.model('user', UserSchema,'user')
module.exports= UserModel;