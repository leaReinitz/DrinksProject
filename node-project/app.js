
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const router = require('./routes/route')
const bodyParser = require("body-parser");
const admin = require('firebase-admin')

const connectionParams={
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}

mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{console.log("the DB connecting")})
.catch((err)=>{console.log(err)})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, authorization, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyParser.json())
app.use((req,res,next)=>{
    console.log((req.body))
    console.log( req.method);
    next();
})

app.use('/',router)
app.use((req,res,next)=>{
res.status(404).send('page not found')})
app.listen(4000)
