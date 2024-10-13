import { Document, Schema, Types } from "mongoose";

export interface Iteacher extends Document {
    name: string;
    password: string;
    email: string;    
    nameClass: string;  
  }
