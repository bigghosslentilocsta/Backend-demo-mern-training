import {schema, model, version} from 'mongoose'

const userSchema=new schema({

    firstName:{
        type:String,
        required:[true,"first name is required"]
    },
    lastName:{  
        type:String
    },
    email:{
        type:String,
        required:[true,"email is required"],
    },
    profileImage:{
        type:String
    },
    role:{
        type:String,
        enum:["admin","user","author"],
        required:[true,"{Value} is an invalid role"]
    },
    isActive:{
        type:Boolean,
        default:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }  
},
{
        timestamps:true,
        strict:"throw",
        versionKey:false
    })
