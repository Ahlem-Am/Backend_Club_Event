
const express=require('express')
const router=express.Router()


const {
    getAll,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    addMemberToEvent,
    showAllMembers,
    deleteMemberFromEvent,
    addSponsorToEvent,
    deleteSponsorFromEvent,
    showAllSponsors,
    addExpensesToEvent,
    showAllExpenses
} = require('../Controller/EventController')

router.route('/').get(getAll).post(createEvent)
router.route('/:id').get(getOneEvent).patch(updateEvent).delete(deleteEvent)
router.route('/:id/Member').post(addMemberToEvent).get(showAllMembers).delete(deleteMemberFromEvent)
router.route('/:id/sponsor').post(addSponsorToEvent).get(showAllSponsors).delete(deleteSponsorFromEvent)
router.route('/:id/expense').post(addExpensesToEvent).get(showAllExpenses)


module.exports=router