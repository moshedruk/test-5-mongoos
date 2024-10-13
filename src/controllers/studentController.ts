import { Request, Response } from "express";
import { Createstudent, Getmyscore } from "../services/studentService";
import studentModel from "../models/studentModel";


export const createStudent = async (req: Request, res: Response) => {
    try {
        const newStudent = await Createstudent(req.body)
        res.status(201).json(newStudent)        
      } catch (err: any) {        
        res.status(400).json({ message: err.message })
        
      }
};
// Get my score
export const getmyscore = async (req: Request, res: Response) => {
    try {       
        const myScore = await Getmyscore(req.params.id)
        res.status(200).json(myScore)
    } catch (err:any) {   
        res.status(404).json({ message: err.message })     
      
    }
};
// Get a single user by ID
