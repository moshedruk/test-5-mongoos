import { Istudent } from "../interface/studentInterface";
import mongoose, { Schema, Types } from "mongoose";
import { IstudentInformtionDto } from "../DTOs/informtionStudentDTO";

const IstudentInformtiondtoSchema:Schema<IstudentInformtionDto> = new Schema<IstudentInformtionDto>({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

const studentSchema:Schema<Istudent> = new Schema<Istudent>({         
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
    myclass: {        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes',         
        required: [true,"Must fill in a field of name class"]        
    },
    information: [{
        type: IstudentInformtiondtoSchema,
        required: true
    }]
})

const studentModel:mongoose.Model<Istudent> = mongoose.model<Istudent>("stusents", studentSchema)

export default studentModel;