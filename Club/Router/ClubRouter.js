
const express=require('express')
const router=express.Router()


const {getAll,
    getOneClub,
    createClub,
    updateClub,
    deleteClub,
    addMemberToClub,
    showAllMembers,
    deleteMemberFromClub,
    addCoachToClub,
    deleteCoachFromClub,
    getCoach,
    addRewardToClub,
    showAllRewards,
    MemberPayment} = require('../Controller/ClubController')

router.route('/').get(getAll).post(createClub)
router.route('/:id').get(getOneClub).patch(updateClub).delete(deleteClub)
router.route('/:id/Member').post(addMemberToClub).get(showAllMembers).delete(deleteMemberFromClub)
router.route('/:id/coach').post(addCoachToClub).get(getCoach).delete(deleteCoachFromClub)
router.route('/:id/reward').post(addRewardToClub).get(showAllRewards)
router.route('/:Club_id/Member_id/payment').post(MemberPayment)

module.exports=router