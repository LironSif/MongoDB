
import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import 'dotenv/config';


const app = express()
const CONNECTION = process.env.CONNECTION_URI
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
app.use('/api/v1/', userRoutes)

mongoose.connect(CONNECTION).then(()=> {
    console.log("DataBase is connected")
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
})



