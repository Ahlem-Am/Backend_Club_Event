const express=require('express')
const app=express()
const event=require('./Router/EventRouter')
const OT_member=require('./Router/OT_MemberRouter')
const path=require('path')
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

app.listen(3000,()=>{
    console.log("server is listening ........")
})