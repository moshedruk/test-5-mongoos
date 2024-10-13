import { Document, Schema, Types } from "mongoose";

export interface Iclass extends Document {
    teacher:Types.ObjectId
    students: Types.ObjectId[]  
  }