import { Schema, Types } from "mongoose";
import { IstudentInformtionDto } from "../DTOs/informtionStudentDTO";


export interface Istudent extends Document {
  name: string;
  password: string;
  email: string;
  myclass: Types.ObjectId;
  myTeacher: Types.ObjectId;
  information: IstudentInformtionDto[];
  role: string;
}