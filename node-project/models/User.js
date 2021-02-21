const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String,require},
    password:{type:String,minlength:5,require},
    searches:[
        { type:mongoose.Schema.Types.ObjectId,ref:'Search' }
    ]
})
module.exports = mongoose.model('User',userSchema)