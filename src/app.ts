import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express()


// Application routes
import userRoutes from "./app/modules/user/user.route";


// middleware

app.use(cors())  // -> using cors
app.use(express.json())  // -> parse data
app.use(express.urlencoded({ extended: true }))    // -> parse data



// all routes middleware
app.use('/api/v1/user', userRoutes)

export default app;