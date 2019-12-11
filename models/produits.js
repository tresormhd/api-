var mongoose = require('mongoose')

var produitSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    prix:{ 
        type:String  
    }, 
    category :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    }
    
})

module.exports = mongoose.model('produits',produitSchema);