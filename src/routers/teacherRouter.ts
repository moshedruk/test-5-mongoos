import { Router } from "express";
import { addscore, createTeacher, getAllMyStudents, getscorbyiId } from "../controllers/teacherController";


const teacherRouter = Router();

// POST - create a new teacher

teacherRouter.post("/", createTeacher)

teacherRouter.post("/:idt/:ids/addscore", addscore)

teacherRouter.get("/:id", getAllMyStudents)

teacherRouter.get("/app/:idt/:ids", getscorbyiId)


export default teacherRouter;