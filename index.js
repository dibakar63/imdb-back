const express=require('express');
const cors=require('cors')
const connectDb=require('./config/db')
const authRouter=require('./router/router')
const dotenv=require('dotenv')
dotenv.config()

const app=express();
app.use(express.json())
app.use(cors())
app.use('/auth',authRouter)
connectDb()

app.listen(4000,(req,res)=>{
    
    console.log(`Server is running in Port ${4000}`)
})