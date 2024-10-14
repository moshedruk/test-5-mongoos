import { Document, Schema, Types } from "mongoose";

export interface Iclass extends Document {
  name: string;
  teacher: Types.ObjectId
  students: Types.ObjectId[]
}