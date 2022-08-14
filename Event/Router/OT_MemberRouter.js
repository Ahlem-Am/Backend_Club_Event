
const express=require('express')
const router=express.Router()
const upload=require('../multer')


 

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