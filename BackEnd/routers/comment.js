const Comment = require("../models/Comment");
const router=require("express").Router();

router.post('/comments',async(req,res)=>{
    const newPostcom=new Comment({
        commentPost:req.body.comment,
    });
    console.log(req.body.comment);
    try{
        const savedPost=await newPostcom.save();
        res.status(201).json(savedPost);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.get('/get/comments',async(req,res)=>{
    try{
        const commentGet=await Comment.find({})
        // res.status(200).json(commentGet)
        res.status(200).send(commentGet)
    }
    catch(err){
        // res.status(500).json(err);
        res.status(500).send(err);
    }
})

module.exports=router