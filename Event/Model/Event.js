const mongoose=require('mongoose')
const { Schema, model } = mongoose;


const EventSchema = new Schema({
    title: String,
    eventDate: Date,
    eventVenue:String,
    /*eventDescription: String,
    createdAt: Date,
    updatedAt: Date,
    organizingTeam: [{
         /*teamMember: {
          type:mongoose.Schema.Types.ObjectId,
          ref:'TeamMember',
          teamMember:String
      }],
    sponsors: [{
      /*sponsor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sponsor' ,
        sponsor:String
      }],
    eventExpenses:[{
        expense:{
            description:String,
           // price:BigInt
        }
    }

    ]
    */
  });

  //middelware:
/*EventSchema.pre('save', function(next) {
    this.updated = Date.now(); // update the date every time a event post is saved
    next();
  });*/
const Event = model('Event', EventSchema);
module.exports= Event