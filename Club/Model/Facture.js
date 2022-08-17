const mongoose = require('mongoose')
const {Schema,model}= mongoose

const Facture= new Schema({
    code:{
        clubMember:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'ClubMember'

        },
        club:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Club'

        },
        CourantMonth:String
    },
    amount:Number

})

