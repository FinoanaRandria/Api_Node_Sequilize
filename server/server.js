const express = require('express');
const cors = require('cors')


const app = express()
const port = 5000 || process.env.PORT

var corsOptions = {
    //le client origin
    origin:'https://localhost:8081'
}

//initialization middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))




//initialisation du routeur
const router = require('./routes/productRouter')

app.use('/api/products', router)

//testing api

app.get('/',(req,res)=>{
   res.json({ message:"okok api"})
})

app.listen(port,()=>{
    console.log(`Server is runing on ${port}`)
})