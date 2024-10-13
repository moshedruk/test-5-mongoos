import mongoose, { Schema, Types } from "mongoose";
import { Iteacher } from "../interface/teacherInterface";


const teacherSchema:Schema<Iteacher> = new Schema<Iteacher>({     
    name: {
        type: String,
        required: [true,"Must fill in a field of name"],
        unique: true,
        maxLength: 10,
        minLength: 4,        
    },
    password: {
        type: String,
        required: [true,"Must fill in a field of password"],
        maxLength: 10,
        minLength: 4, 
    },
    email: {
        type: String,
        required: [true,"Must fill in a field of email"]
    },
    nameClass: {
        type: String,
        required: [true,"Must fill in a field of name class"]
    }  
})

const teacherModel:mongoose.Model<Iteacher> = mongoose.model<Iteacher>("teachers", teacherSchema)

export default teacherModel;