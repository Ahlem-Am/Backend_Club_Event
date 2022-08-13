const mongoose= require('mongoose')
const{Schema,model}=mongoose


const OTMemberSchema=new Schema({
    name:String,
    surname:String,
    phone:Number,
    email:String,
    bio:String,
    avatar:String


})
const OT_Member=model('OT_Member',OTMemberSchema)
module.exports= OT_Member