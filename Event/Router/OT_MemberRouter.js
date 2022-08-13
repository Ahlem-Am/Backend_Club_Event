
const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const upload=require('../multer')
mongoose.connect('mongodb://ahlem:12868107@ac-m0kedrk-shard-00-00.ywolfba.mongodb.net:27017,ac-m0kedrk-shard-00-01.ywolfba.mongodb.net:27017,ac-m0kedrk-shard-00-02.ywolfba.mongodb.net:27017/?ssl=true&replicaSet=atlas-wylzyk-shard-0&authSource=admin&retryWrites=true&w=majority',
 { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));

 

const {
  getAll,
  getOT_Member,
  createOT_Member,
  updateMember,
  deleteMember
} = require('../Controller/OT_MemberController')

router.get('/',upload,getAll);
router.post('/',upload,createOT_Member)
router.get('/:id',upload,getOT_Member)
router.patch('/:id',upload,updateMember)
router.delete('/:id',upload,deleteMember)


module.exports=router