const Club=require('../Model/Club')
const ClubMember=require('../Model/ClubMember')
const Coach=require('../Model/Coach')
const Facture=require('../Model/Facture')




const getAll=async(req,res,next)=>{
    let clubs
    try {
        clubs=await Club.find({});
        res.send(clubs);
        } 
    catch (error) {
        if (!clubs) res.status(404).send("club Not found");
        res.status(500).send(error);
        }
       
}

/* ****************************** */
const getOneClub =(req,res,next)=>{
    Club.findOne({_id:req.params.id})
    .then((club)=>res.status(200).json( club
    ))
    .catch(error=>res.status(404).json({
        error
    }))

    
}

/* ****************************** */
const createClub =(req,res,next)=>{
    delete req.body._id
    console.log(req.body)
    const NewClub=new Club({
        ...req.body
    })
    NewClub.save()
    .then(()=>res.status(201).json({
        message: 'Club Saved',
        Club:NewClub
    }))
    .catch(error=>res.status(400).json({
        error
    }))
}
/* ******************************* */
const updateClub=async(req,res)=>{
    let club
    try{
         club=await Club.findByIdAndUpdate(req.params.id, req.body,
            {new:true,
            runValidators:true}
            );
       
        res.status(200).json({
            message:"Success",
            updatedEClub:club
        });
    } catch (error) {
        if (!club) res.status(404).send("club Not found");

        res.status(500).send(error);
        }

   
}

/* ******************************** */
const deleteClub=async(req,res,next)=>{
    let club
    try {
         club= await Club.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            message:"Success",
            DeletedClub:club
        });
        }
     catch (error) {
        if (!club) res.status(404).send("club Not found");
        res.status(500).send(error);
        }

   

}

/*
* *******************************************************************************
* *******************************************************************************
*/
const addMemberToClub=async(req,res,next)=>{
    let member;
    let club
    try{
        member=await ClubMember.findById(req.body.member)
    
        club = await Club.findById(req.params.id);
        const members=Club.members.map((item)=>{return {member:item.member}})
        members.push({member:req.body.member})
        club.members=members

    
        club.save()
        
        res.status(200).json({
            message:"Success",
            updatedClub:club
        });
    }
    catch(error){
        if (!club) res.status(404).send("No item found");
        if(!member)  res.status(404).send(" member Not found"); 
        res.status(404).json({error})
    }

    
}
const deleteMemberFromClub=async(req,res,next)=>{
    let club;
    let member;
    try{
         club= await Club.findById(req.params.id);
         member=await ClubMember.findById(req.body.member)
        let members=club.members.map((item)=>{return {member:item.member}})
        let newmembers=members.filter((item)=>item.member!=req.body.member)
    
        club.members=newmembers
        club.save()
    
    res.status(200).json({
        message:"Success",
        updatedClub:club
    });

    }
    catch(error){
        if (!club) res.status(404).send("No item found");
        if(!member)  res.status(404).send(" member Not found"); 
        res.status(404).json({
        error})
    }

    
}

const showAllMembers=async(req,res)=>{
    let club;
    let members;
    try {
         club=await Club.findById(req.params.id).populate("members.member")
         members=club.members
        const rslt=members.map((item)=>{
                item.member.avatar=__dirname+item.member.avatar
                return item })
        res.status(200).json(rslt);
        
        
    } catch (error) {
        if(!club)res.status(404).send(" Club Not found");
        if(!members)res.status(404).send(" members Not found"); 
        res.status(500).send(error);
        }
}


const getClubMember =(req,res,next)=>{
    
    ClubMember.findOne({_id:req.body.member})
    .then((member)=>{
        member.avatar=__dirname+member.avatar
        const dt=new Date()
        const date=dt.getMonth+'/'+dt.getFullYear
        facture=await Facture.findOne({code:
        {
            club:req.params.id,
            clubMember:req.body.member,
            CourantMonth:date
        }})
        let etat;
        if(facture) etat=true
        else etat=false
        res.status(200).json( {...member,
            payment:etat}
    )})
    .catch(error=>res.status(404).json({
        error
    }))

    
}

/*
* *******************************************************************************
* *******************************************************************************
*/

const addCoachToClub=async(req,res,next)=>{
    let club ;
    let coach
    try{
        coach=await Coach.findById(req.body.coach)
        club = await Club.findById(req.params.id);
        club.coach=req.body.coach
        club.save()
        
        res.status(200).json({
            message:"Success",
            updatedClub:club
        });
        }
    
    
    catch(error){
        if(!coach) res.status(404).send("Coach not found"); 
        if (!club) res.status(404).send("Club not found");
        res.status(404).json({error})
    }

    
}
const deleteCoachFromClub=async(req,res,next)=>{
    let coach;
    let club;
    try{
        coach=await Coach.findById(req.body.coach)
        club = await Club.findById(req.params.id);
            club.coach=null
             club.save()
       
        res.status(200).json({
            message:"Success",
            updatedClub:club
        });}
       

    catch(error){
        if(!coach)res.status(404).send("Coach Not found"); 
        if (!club) res.status(404).send("Club Not found");
        res.status(404).json({error})
    }

    
}

const getCoach=async(req,res)=>{
    let club;
    let coach;
    try {
        club=await Clubs.findById(req.params.id).populate("coach")
        coach=club.coach
      
        coach.avatar=__dirname+coach.avatar
        res.status(200).json(coach);
    
    
    } 
    catch (error) {
        if (!club) res.status(404).send("Club Not found");
        if(!coach)res.status(404).send("Coach Not found"); 
       
        res.status(500).send(error);
        }
}

/*
* *******************************************************************************
* *******************************************************************************
*/

const addRewardToClub=async(req,res)=>{
    let  club

    try{
        const club=await Club.findById(req.params.id)
            const rewards=club.rewards
            rewards.push({reward:req.body.reward})
            club.rewards=rewards
            club.save()
        
        res.status(200).json({
            message:"Success",
            updatedClub:club
        });}

    catch(error){
        if (!club) res.status(404).send("Club Not found");
        res.status(404).json({
        error})
    }
    
}
const showAllRewards=async(req,res)=>{
    let club;
    try {
    club=await Club.findById(req.params.id)
    
    const rewards=club.rewards
    if(!rewards)  res.status(404).json({
        message:"Not Found",
    })
    res.status(200).json(rewards);
    } 
    catch (error) {
        if (!club) res.status(404).send("Club Not found");

        res.status(500).send(error);
        }
}
/***************************************************** */
const MemberPayment=async(req,res)=>{
    let club
    let member
    try{
        club=await Club.findById(req.params.Club_id)
        if (!club) res.status(404).send("Club Not found");
        member=await ClubMember.findById(req.params.Member_id)
        if (!member) res.status(404).send("member Not found");
        const dt=new Date()
        const date=dt.getMonth+'/'+dt.getFullYear
        const facture =new Facture({
            code:{
                club:club,
                clubMember:member,
                currentMonth:date
            },
            amout:req.body.amount
                })

        facture.save()
               .then(()=>res.status(201).json({
                facture_Code:require('crypto').createHash('md5').update(club+'_'+member+'_'+date).digest("hex"),
                member:member,
                club:club
            }))
                .catch(error=>res.status(400).json({
                    error
                }))
    
       
            }

catch (error) {


    res.status(500).send(error);
    }
}

module.exports={getAll,getOneClub,createClub,updateClub,deleteClub,addMemberToClub,showAllMembers,deleteMemberFromClub,addCoachToClub,deleteCoachFromClub,getCoach,addRewardToClub,showAllRewards,MemberPayment}