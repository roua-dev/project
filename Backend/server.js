const express=require('express')
const connectDB = require('./config/connectDB')
const app=express()
const authRouter=require('./routes/authRouter')
const productRouter=require('./routes/productRouter')


app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/prod',productRouter)

//3 set up the env variables 

require('dotenv').config({path:'./config/.env'})

//2 connect BD
connectDB()


// 1 start the server
const PORT=process.env.PORT || 5000
app.listen(PORT,err=>err?console.error(err):
console.log(`the server is running on port ${PORT}`))