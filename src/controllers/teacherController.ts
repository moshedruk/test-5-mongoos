import { Request, Response } from "express";
import {  addScore, CreateTeacher, GetallmyStudents, GetmyStudents, setScore } from "../services/teacherService";

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

export const addscore = async (req: Request, res: Response) => {
    try {       
        const teacher = await addScore(req.params.idt,req.params.ids, req.body)
        res.status(201).json(teacher);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });         
      }
};

export const setscore = async (req: Request, res: Response) => {
    try {       
        const teacher = await setScore(req.params.idt,req.params.ids, req.body)
        res.status(201).json(teacher);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });         
      }
};

export const getAllMyStudents = async (req: Request, res: Response) => {
    try {       
        const teacher = await GetallmyStudents(req.params.id)
        res.status(201).json(teacher);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });         
      }
};
export const getscorbyiId = async (req: Request, res: Response) => {
    try {       
        const teacher = await GetmyStudents(req.params.idt,req.params.ids)
        res.status(200).json(teacher);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });         
      }
};

