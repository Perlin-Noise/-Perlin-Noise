const express = require('express') ;
const mongoose = require('mongoose');
const User = require('./model/user');
require ("dotenv/config")
var app = require('express')();
app.use(express.json());
app.get('/users', (req, res) =>{ 
    let users = ["dima" ,"dodo" ]
    res.send({users:users,});
});

app.post('/create_user', async (req, res) => {
    try {
        const myuser = new User(req.body);
      await myuser.save
      res.send(myuser)
    } catch (err) {
     res.send({message:err});
    }
   });
   app.post('/create_device', async (req, res) => {
    try {
        const mydevice = new Device(req.body);
      await mydevice.save
      res.send(mydevice)
    } catch (err) {
     res.send({message:err});
    }
   });




mongoose.connect(process.env.DB_CONNECTION_STRING,{useUnifiedTopology: true,useNewUrlParser: true},(req, res) => {
console.log("connected to the database")
});
app.listen(3001,()=>{
    console.log('listening to 3001');
});