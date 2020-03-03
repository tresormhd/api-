const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan')
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000

let apiRoutes = require('./routes/index')

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')));


    mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true,useUnifiedTopology: true});
    var db = mongoose.connection;
    // Added check for DB connection
    if(!db)
        console.log("Error connecting db")
    else
        console.log("Db connected successfully")

    app.use('/',(req,res)=>{
        res.render('index')
    })
    app.use('/test', (req, res) => {
        res.send("yo juste un test de github desktop")
    })
    app.use('/APIConnect',apiRoutes)

    app.listen(port,()=> console.log('start on ' + port) )