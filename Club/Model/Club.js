const mongoose=require('mongoose')
const {Schema,model}=mongoose
const timestampPlugin=require('./Plugin/timestamp')



const ClubSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    activity:{
        type:String,
        required:true
    },
    logo:String,

    Coach:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Coach'
    },

    members:[{
        member:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'ClubMember'

        }

    }],
    rewards:[{
        reward:String
    }]

})


ClubSchema.plugin(timestampPlugin)

const Club = model('Club',ClubSchema)
module.exports = Club