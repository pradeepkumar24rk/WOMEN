const mongoose=require("mongoose");

const WomenSchema=new mongoose.Schema(
    {                                                                     //objects
        
        name:{type:String,required:true},
        age:{type:String,required:true},
        expirence:{type:String,required:true},
        dob:{type:String,required:true},
        desc:{type:String,required:true},
        
    },
)

module.exports=mongoose.model("Women",WomenSchema);            //User ->model name; UserSchema ->schema name