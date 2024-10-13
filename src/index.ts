import "dotenv/config";
import exp from "express";
import { connectToMongo } from './config/DBconfig'
import cookieParser from 'cookie-parser';
import teacherRouter from './routers/teacherRouter'
import authRouter from './routers/authRouter';
import studentRouter from './routers/studentRouter';

const app = exp();
const PORT  = process.env.PORT
app.use(exp.json())
app.use(cookieParser())
connectToMongo()

// Routes
app.use('/auth', authRouter)
app.use('/teacher', teacherRouter)
app.use('/student',studentRouter )


// Server running message
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });