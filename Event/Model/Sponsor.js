const mongoose= require('mongoose')
const{Schema,model}=mongoose
const timestampPlugin=require('./plugins/timestamp')


const SponsorSchema=new Schema({
    name:{type:String,
        required:true},
    domaine:{type:String,
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
    avatar:String


})
SponsorSchema.plugin(timestampPlugin)
const Sponsor=model('Sponsor',SponsorSchema)
module.exports= Sponsor