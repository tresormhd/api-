const produits = require('../models/produits')
const categorie = require('../models/category')

exports.produitsQueries = class {

    static AddProduits (data){
        return new Promise(async(next)=>{
            const produit = new produits({
                name: data.name,
                description:data.description,
                prix:data.prix,
            }).save().then((prod)=>{ 
                // console.log(prod)
                categorie.findById(data.catid).then(cat => {
                    cat.produits.push(prod._id);
                    cat.save();
                })
                next({etat: true, datas: prod })
                console.log(datas)
            }).catch((err)=>{
                next({etat:false, erreur : err})
            })
        }) 
    }

    static findAllProd(){
        return new Promise(async(next)=>{
            produits.find()
                .then((cat)=>{
                next({etat:true, category:cat})
                }).catch((err)=>{
                next({etat:false, erreur:err})
                })
        })
    }



}