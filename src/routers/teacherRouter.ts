import { Router } from "express";
import { createTeacher } from "../controllers/teacherController";

const teacherRouter = Router();

// POST - create a new teacher

teacherRouter.post("/",createTeacher ) 




export default teacherRouter;