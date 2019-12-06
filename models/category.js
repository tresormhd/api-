var mongoose = require('mongoose')

var categorySchema= new mongoose.Schema({
    nom : {type:String},
    description : {type:String},
    produits:[
        {type: mongoose.Schema.Types.ObjectId,ref:'produits'}
    ]
    
})

module.exports = mongoose.model('categories',categorySchema);