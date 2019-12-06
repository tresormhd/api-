const category = require('../models/category')
const produit = require('../models/produits')


exports.categoryQueries = class{

    static findAllCat (){
        return new Promise(async(next)=>{
            category.find().populate('categoris')
                .then((cat)=>{
                next({etat:true, category:cat})
                }).catch((err)=>{
                next({etat:false, erreur:err})
                })
        }) 
    }

    static Addcategory (data){
        return new Promise(async(next)=>{
            var produit = category.find({category:data.cat_index})
            const categories = new category({
                nom: data.nom,
                description:data.description
            }).save().then((cat)=>{
                    next({etat: true, datas: cat })
                }).catch((err)=>{
                    next({etat:false, erreur : err})
                })
        }) 
    }
    


}