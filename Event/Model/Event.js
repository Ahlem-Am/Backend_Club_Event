const mongoose=require('mongoose')
const { Schema, model } = mongoose;
const timestampPlugin=require('./plugins/timestamp')


const EventSchema = new Schema({
    title:{type:String,
      required:true},
    eventDate:{type:Date,
      required:true},
    eventVenue:{type:String,
      required:true},
    eventDescription:{type:String,
      required:true},
    organizingTeam: [{
      member:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'OT_Member'}
      }
      ],
    sponsors: [{
      sponsor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sponsor' 
      },
      services:[
        {
          service:{
            name:String,
            price:Number
          }

          }
        ]
      }],
    eventExpenses:[{
        expense:{
            description:String,
            price:Number
        }
    }]
    

  });

  EventSchema.plugin(timestampPlugin)
  
const Event = model('Event', EventSchema);
module.exports= Event