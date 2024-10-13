import { Schema, Types } from "mongoose";
import { IstudentInformtionDto } from "../DTOs/informtionStudentDTO";


export interface Istudent extends Document {
    name: string;
    password: string;
    email: string;
    myclass:Types.ObjectId;
    information: IstudentInformtionDto[]; 
  }