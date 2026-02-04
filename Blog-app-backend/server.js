import exp from 'express'
import {connect} from 'mongoose'
import { config } from 'dotenv'
import { userRoute} from './APIs/UserAPI.js'
import { authorRoute } from './APIs/AuthorAPI.js'
import { adminRoute } from './APIs/AdminAPI.js'

config()//PROCESS.ENV

const app=exp()

app.use('/users', userRoute)
app.use('/authors', authorRoute)
app.use('/admins', adminRoute)

async function connectDB() {
    try {
        await connect(process.env.DB_URL)
        console.log("DB connected") 
        //START HTTP SERVER
        app.listen(process.env.PORT,()=>{
            console.log(process.env.PORT,"port connected")
        })
    } catch(err){
        console.log("DB connection failed", err)
    }
}

connectDB()

app.use((err,req,res,next)=>{
    console.log(err)
    res.json({Message:"error", reason:err.message})
})