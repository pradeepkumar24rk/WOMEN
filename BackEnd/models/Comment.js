const mongoose=require("mongoose");

const CommentSchema=new mongoose.Schema(
    {                                                                     //objects
        commentPost:{ type:String, required:true,},
        
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model("Comment",CommentSchema);            //User ->model name same as file name ; UserSchema ->schema name