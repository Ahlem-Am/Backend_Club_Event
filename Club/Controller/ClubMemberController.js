const ClubMember=require('../Model/ClubMember')

const getAll=async(req,res,next)=>{
    try {
        const members=await ClubMember.find({});
        const rslt=members.map((member)=>{
            member.avatar=__dirname+member.avatar
            return member 
        })
    
            res.send(rslt);
        } 
    catch (error) {
        res.status(500).send(error);
        }
       
}

/* ****************************** */
const getClubMember =(req,res,next)=>{
    ClubMember.findOne({_id:req.params.id})
    .then((member)=>{
        member.avatar=__dirname+member.avatar
        res.status(200).json( member
    )})
    .catch(error=>res.status(404).json({
        error
    }))

    
}

/* ****************************** */
const createClubMember =(req,res,next)=>{
    delete req.body._id

    const avatar= '/images/'+req.file.filename
    const NewMember=new ClubMember({
        ...req.body,avatar
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

/* ******************************** */
const deleteMember=async(req,res,next)=>{
    try {
        const member = await ClubMember.findByIdAndDelete(req.params.id);
        if (!member) res.status(404).send("No item found");
        res.status(200).json({
            message:"Success",
            DeletedMember:member
        });
        }
     catch (error) {
        res.status(500).send(error);
        }

   

}


module.exports={getAll,getClubMember,createClubMember,updateMember,deleteMember}