const express=require("express");
const app= express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");            
dotenv.config();                            
var cors = require('cors')
app.use(cors());


/* Routers */
const authRoute=require("./routers/auth");
const womenRoute=require("./routers/women");
const commentRoute=require("./routers/comment");


mongoose.connect(process.env.MONGO_URL)        
.then((()=>{
console.log("successfully")
}))
.catch(((err)=>{
    console.log(err);
}))


app.use(express.json());                   

app.use('/api/auth',authRoute);
app.use('/api/data',womenRoute);
app.use('/api/post',commentRoute);



app.listen(process.env.PORT || 5000,()=>{
    console.log("Server running");
})