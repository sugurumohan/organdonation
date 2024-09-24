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
    Zip:{
        type:String
    },
    email:{
        require:true,
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
    gender:{
        require:true,
        type:String
    },
    organs:{
        require:true,
        type:[String]
    },
    finall:{
        type:String
        
    },
    address:{
        type:[String]
    }
    


});
const OrganDonation=mongoose.model('OrganDonation',userSchema)
module.exports=OrganDonation