
const express=require('express')
const router=express.Router()
const upload=require('../multer')


 

const {getAll,
    getCoach,
    createCoach,
    updateCoach,
    deleteCoach}
    = require('../Controller/CoachController')

router.get('/',upload,getAll);
router.post('/',upload,createCoach)
router.get('/:id',upload,getCoach)
router.patch('/:id',upload,updateCoach)
router.delete('/:id',upload,deleteCoach)


module.exports=router