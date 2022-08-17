const Coach=require('../Model/Coach')

const getAll=async(req,res,next)=>{
    try {
        const coachs=await Coach.find({});
        const rslt=coachs.map((coach)=>{
            coach.avatar=__dirname+coach.avatar
            return coach 
        })
    
            res.send(rslt);
        } 
    catch (error) {
        res.status(500).send(error);
        }
       
}

/* ****************************** */
const getCoach =(req,res,next)=>{
    Coach.findOne({_id:req.params.id})
    .then((coach)=>{
        coach.avatar=__dirname+coach.avatar
        res.status(200).json( coach
    )})
    .catch(error=>res.status(404).json({
        error
    }))

    
}

/* ****************************** */
const createCoach =(req,res,next)=>{
    delete req.body._id

    const avatar= '/images/'+req.file.filename
    const NewCoach=new Coach({
        ...req.body,avatar
    })
    NewCoach.save()
    .then(()=>res.status(201).json({
        message: 'Coach Saved'
    }))
    .catch(error=>res.status(400).json({
        error
    }))
}
/* ******************************* */
const updateCoach=async(req,res)=>{
    const NewCoach={ ...req.body,avatar}
        const coach=await Event.findByIdAndUpdate(req.params.id, NewCoach,
            {new:true,
            runValidators:true}
            );
        try{
        res.status(200).json({
            message:"Success",
            updatedCoach: coach
        });
        } catch (error) {
        res.status(500).send(error);
        }

   
}

/* ******************************** */
const deleteCoach=async(req,res,next)=>{
    try {
        const coach = await Coach.findByIdAndDelete(req.params.id);
        if (!coach) res.status(404).send("No item found");
        res.status(200).json({
            message:"Success",
            DeletedCoach:coach
        });
        }
     catch (error) {
        res.status(500).send(error);
        }

   

}


module.exports={getAll,getCoach,createCoach,updateCoach,deleteCoach}