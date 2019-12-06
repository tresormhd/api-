var mongoose = require('mongoose')

var userModels = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:email,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    gender: String,
    avatar:{
        type:Image,
        default:''
    }, 
    reg_date:{
        type:Date,
        default:Date.now()
    }
    
})

var userData = module.exports= mongoose.model('user',userModels)

module.exports.get = (callback, limit) =>{ Contact.find(callback).limit(limit) }