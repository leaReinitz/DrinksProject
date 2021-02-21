const mongoose = require('mongoose')

let newSchema = mongoose.Schema({
    string:{type:String,require},
    date:{type:Date,default:new Date()},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})
module.exports = mongoose.model('Search',newSchema)

