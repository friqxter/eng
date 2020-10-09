const express=require("express");
const app = express();
const cors = require("cors");
const axios = require('axios').default;
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once("open", ()=>{
  console.log("MongoDB database connection established succesfully");
});
const hospitalSchema= new mongoose.Schema({
  name: String,



    }
    else{
      console.log("Data saved in the database")
    }
    async function makePostRequest() {

    params = {
    h_name: req.body.name,
    age: req.body.age,
    action: req.body.Address
}

    let res = await axios.post('https://testhclhack.herokuapp.com/add/', params);

    console.log(res.data);
}

makePostRequest();
  })
  res.redirect("/")
})
app.listen(3000,function(){
  console.log("Server Started on port 3000")
});

app.get("/",function(req,res){
  res.sendFile(__dirname + '/index.html')
});
