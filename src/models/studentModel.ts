import { Istudent } from "../interface/studentInterface";
import mongoose, { Schema, Types } from "mongoose";
import { IstudentInformtionDto } from "../DTOs/informtionStudentDTO";

const IstudentInformtiondtoSchema: Schema<IstudentInformtionDto> = new Schema<IstudentInformtionDto>({
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

const studentSchema: Schema<Istudent> = new Schema<Istudent>({
    name: {
        type: String,
        required: [true, "Must fill in a field of name"],
        unique: true,
        maxLength: 10,
        minLength: 4,
    },
    password: {
        type: String,
        required: [true, "Must fill in a field of password"],

    },
    email: {
        type: String,
        required: [true, "Must fill in a field of email"]
    },
    myclass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes',
        required: [true, "Must fill in a field of name class"]
    },
    information: [{
        type: IstudentInformtiondtoSchema,
        default: []
    }],
    myTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers',
        required: [true, "Must fill in a field of name teacher"]
    },
    role: {
        type: String,
        required: [true, "Must fill in a field of role"],
        enum: ['student', 'teacher']
    }
})

const studentModel: mongoose.Model<Istudent> = mongoose.model<Istudent>("students", studentSchema)

export default studentModel;