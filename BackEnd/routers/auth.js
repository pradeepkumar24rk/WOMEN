const router=require("express").Router();
const User=require("../models/User");
const CryptoJS=require("crypto-js")

//REGISTER API

router.post('/register',async(req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.Pass_SEC).toString(),                //PASS_SEC --> is key that help to encode and decode the password
    });

    try{                                                  //Why we are using try catch because when we try to save the document (or record) in db some time the server goesdown so we r using try catch 
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);                 //200->ok ; 201-> successfully post
    }
    catch(err){
        res.status(500).json(err);
    } 
})


//LOGIN API

router.post('/login',async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username});

        {!user && res.status(401).json("Wrong credentials") }

        const hashedPassword=CryptoJS.AES.decrypt(user.password,process.env.Pass_SEC).toString(CryptoJS.enc.Utf8);

        {hashedPassword!==req.body.password && res.status(401).json("Wrong credentials")}


        
        const {password,...others}=user._doc          //mongodb save all value in _doc
        res.status(200).json({...others});

    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports=router