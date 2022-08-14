const mongoose= require('mongoose')
const{Schema,model}=mongoose
const validator=require('validator')
const timestampPlugin=require('./plugins/timestamp')


const OTMemberSchema=new Schema({
    name:{type:String,
        required:true},
    surname:{type:String,
        required:true},
    phone:
    {
        number:{
            type:Number,
            required:true},
        CountryCode:{
            type:Number,
            required:true,
            Default:'216'}
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:(value)=> {return validator.isEmail(value)}
    },
    bio:String,
    avatar:String,


})
OTMemberSchema.plugin(timestampPlugin)

const OT_Member=model('OT_Member',OTMemberSchema)
module.exports= OT_Member