import { Request, Response } from "express";
import { Createstudent } from "../services/studentService";


export const createStudent = async (req: Request, res: Response) => {
    try {
        const newStudent = await Createstudent(req.body)
        res.status(201).json(newStudent)        
      } catch (err: any) {        
        res.status(400).json({ message: err.message })
        
      }
};
// Get all users
export const getallStudents = async (req: Request, res: Response) => {
    try {       
        
    } catch (err) {        
      
    }
};
// Get a single user by ID
export const getScore = async (req: Request, res: Response) => {
    try {       
        
    } catch (err) {        
      
    }
};