const express=require("express");
const app= express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");             // hide the data 
var cors = require('cors')

app.use(cors());

/* Routers */

const authRoute=require("./routers/auth");

const womenRoute=require("./routers/women");
const commentRoute=require("./routers/comment");

dotenv.config();                            //config the hide data

mongoose.connect(process.env.MONGO_URL)        //MONGO_URL is key to use the value
.then((()=>{
console.log("successfully")
}))
.catch(((err)=>{
    console.log(err);
}))


app.use(express.json());                    //we should input as json 

app.use('/api/auth',authRoute);

//women
app.use('/api/data',womenRoute);
app.use('/api/post',commentRoute);


// app.get("/api/test",()=>{
//     console.log("test success");       //without routers
// })


app.listen(process.env.PORT || 5000,()=>{
    console.log("Server running");
})