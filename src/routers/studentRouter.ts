import { Router } from "express";
import { createStudent, getmyscore } from "../controllers/studentController";

const studentRouter = Router();

studentRouter.post('/',createStudent)
studentRouter.get('/',getmyscore)




export default studentRouter;