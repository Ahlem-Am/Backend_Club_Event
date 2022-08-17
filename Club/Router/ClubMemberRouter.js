
const express=require('express')
const router=express.Router()
const upload=require('../multer')


 

const {
  getAll,
  getClubMember,
  createClubMember,
  updateMember,
  deleteMember
} = require('../Controller/ClubMemberController')

router.get('/',upload,getAll);
router.post('/',upload,createClubMember)
router.get('/:id',upload,getClubMember)
router.patch('/:id',upload,updateMember)
router.delete('/:id',upload,deleteMember)


module.exports=router