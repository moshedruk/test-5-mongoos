import { Request, Response } from "express";
import { CreateTeacher } from "../services/teacherService";

// create a new teacher
export const createTeacher = async (req: Request, res: Response) => {
    try {       
        const teacher = await CreateTeacher(req.body)
        res.status(201).json(teacher);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });         
      }
};

