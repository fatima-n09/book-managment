import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import  {AdminRouter} from './routes/auth.js'
import { trusted } from 'mongoose'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)

app.listen(process.env.PORT, () => {
    console.log("server is running on port ");
})