import "dotenv/config";
import exp from "express";
import { connectToMongo } from './config/DBconfig'
import cookieParser from 'cookie-parser';
import teacher from './routers/teacherRouter';
import auth from './routers/authRouter';
import student from './routers/studentRouter';

const app = exp();
const PORT  = process.env.PORT
app.use(exp.json())
app.use(cookieParser())
connectToMongo()

// Routes
app.use('/auth', auth)
app.use('/teacher', teacher)
app.use('/student',student )


// Server running message
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });