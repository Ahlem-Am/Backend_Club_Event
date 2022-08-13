
const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
mongoose.connect('mongodb://ahlem:12868107@ac-m0kedrk-shard-00-00.ywolfba.mongodb.net:27017,ac-m0kedrk-shard-00-01.ywolfba.mongodb.net:27017,ac-m0kedrk-shard-00-02.ywolfba.mongodb.net:27017/?ssl=true&replicaSet=atlas-wylzyk-shard-0&authSource=admin&retryWrites=true&w=majority',
 { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));

 

const {
    getAll,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../Controller/EventController')

router.route('/').get(getAll).post(createEvent)
router.route('/:id').get(getOneEvent).patch(updateEvent).delete(deleteEvent)


module.exports=router