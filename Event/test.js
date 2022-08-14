let ch="home welcom hello world.png"
console.log(ch.split('.')[0].split(' ').join('_'))
const createOT_Member =(req,res,next)=>{
    delete req.body._id
    console.log(req.body)
    const phone={number:req.body.number,
                CountryCode:216}

    const avatar= '/images/'+req.file.filename
    delete req.body.number
    const NewMember=new OT_Member({
        ...req.body,avatar,phone
    })
    NewMember.save()
    .then(()=>res.status(201).json({
        message: 'Member Saved'
    }))
    .catch(error=>res.status(400).json({
        error
    }))
}
/* ******************************* */
const updateMember=async(req,res)=>{
    const NewMember={ ...req.body,avatar}
        const member=await Event.findByIdAndUpdate(req.params.id, NewMember,
            {new:true,
            runValidators:true}
            );
        try{
        res.status(200).json({
            message:"Success",
            updatedMember: member
        });
        } catch (error) {
        res.status(500).send(error);
        }

   
}