const mongoose=require('mongoose')
const {Schema,model}=mongoose
const timestampPlugin=require('./Plugin/timestamp')


const CoachSchema = new Schema({
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
    bio:String,
    avatar:String,

})

CoachSchema.plugin(timestampPlugin)
const Coach =model('Coach',CoachSchema)
module.exports	= Coach
