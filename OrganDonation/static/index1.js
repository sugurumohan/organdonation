const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true,
    },
    dob:{
        type:Date
    },
    phonenumber:{
        type:Number
    },
    bg:{
        require:true,
        type:String
    },
    Street:{
        type:String
    },
    StreetAdrre:{
        type:String
    },
    City:{
        type:String
    },
    height:{
        require:true,
        type:Number
    },
    weight:{
        require:true,
        type:Number
    },
    urgency:{
        require:true,
        type:String
    },
    finall:{
        type:String
        
    },
    organ:{
        type:String,
        require:true,
    },
    address:{
        type:[String]
    }


});
const OrganDonors=mongoose.model('OrganDonors',userSchema)
module.exports=OrganDonors