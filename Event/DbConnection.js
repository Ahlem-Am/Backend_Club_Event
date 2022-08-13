const mongoose=require('mongoose')
const connection =()=>{mongoose.connect('mongodb+srv://ahlem:12868107@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));}
  module.exports=connection