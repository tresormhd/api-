const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan')
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000

let route1 = require('./routes/index')
const {produitsQueries}= require('./controllers/produits.controller')
const { categoryQueries } = require('./controllers/category.controller')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
    // connect mongo
    mongoose.connect('mongodb://localhost/api_soro', { useNewUrlParser: true,useUnifiedTopology: true});
    var db = mongoose.connection;
    if(!db)
        console.log("Error connecting db")
    else
        console.log("Db connected successfully")

app.get('/',async(req,res)=>{
    const result = await  categoryQueries.findAllCat()
    // console.log(result.category)
    res.render('formulaire',{categoties : result.category})
})

app.post('/',async(req,res)=>{

    if (req.body.value1 == 1) {
        if (!req.body) {
            return res.sendStatus(500)
        } else{
            const formData1 = req.body 
            const result = await produitsQueries.AddProduits(formData1)
            console.log(formData1)
        }
    } else {

        if (!req.body) {
            return res.sendStatus(500)
        } else{
            const formData2 = req.body 
            const results = await categoryQueries.Addcategory(formData2)
            console.log(formData2)
        }
    }
    
    res.redirect('/')
})
app.get('/api/category',async(req,res)=>{
    var api_key = "NaN"
    const result = await  categoryQueries.findAllCat()
    data = {
        status:true,
        message:"data outside",
        dataResult : result.category
    }
    res.json(data)
})
// app.get('/api/produit',async(req,res)=>{
//     const result = await  produitsQueries.findAllProd()
//     data = {
//         status:true,
//         message:"data outside",
//         dataResult : result.produit
//     }
//     res.json(data)
// })


app.listen(port,()=> console.log('start on ' + port) )