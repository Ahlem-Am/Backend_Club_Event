const express=require('express')
const app=express()
const event=require('./Router/EventRouter')
const OT_member=require('./Router/OT_MemberRouter')
const sponsor=require('./Router/SponsorRouter')
const path=require('path')
const mongoose=require('mongoose')
mongoose.connect('mongodb://ahlem:12868107@ac-m0kedrk-shard-00-00.ywolfba.mongodb.net:27017,ac-m0kedrk-shard-00-01.ywolfba.mongodb.net:27017,ac-m0kedrk-shard-00-02.ywolfba.mongodb.net:27017/?ssl=true&replicaSet=atlas-wylzyk-shard-0&authSource=admin&retryWrites=true&w=majority',
 { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));
// parse form data 
app.use(express.urlencoded({ extended: false }))
// parse json 
app.use(express.json())
app.use('/images',express.static(__dirname+'/images'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))

  
  })
  

app.use('/Events',event)
app.use('/Team_Member',OT_member)
app.use('/Sponsor',sponsor)

app.listen(3000,()=>{
    console.log("server is listening ........")
})