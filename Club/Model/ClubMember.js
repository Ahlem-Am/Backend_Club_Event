const mongoose=require('mongoose')
const {Schema,model}=mongoose
const timestampPlugin=require('./Plugin/timestamp')


const ClubMemberSchema = new Schema({
    name:{type:String,
    required:true},

    surname:{type:String,
        required:true},

    phone:{type:Number,
        required:true},

    email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            validate:(value)=> {return validator.isEmail(value)}
        },
    BirthDate:{type:Date,
    required:true},
    avatar:String,

})

ClubMemberSchema.plugin(timestampPlugin)
const ClubMember =model('ClubMember',ClubMemberSchema)
module.exports	= ClubMember
