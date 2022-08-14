
const express=require('express')
const router=express.Router()
const upload=require('../multer')
 

const {getAll,
    getSponsor,
    createSponsor,
    updateSponsor,
    deleteSponsor}= require('../Controller/SponsorController')

router.get('/',upload,getAll);
router.post('/',upload,createSponsor)
router.get('/:id',upload,getSponsor)
router.patch('/:id',upload,updateSponsor)
router.delete('/:id',upload,deleteSponsor)


module.exports=router