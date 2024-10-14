
import mongoose, { Schema, Types } from "mongoose";
import { Iclass } from "../interface/classInterface";

const classSchema: Schema<Iclass> = new Schema<Iclass>({
    name: {
        type: String,
        required: [true, "Must fill in a field of name"],
        unique: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers',
        required: [true, "Must fill in a field of name teacher"]
    },
    students:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'students',
            default: []
        }]
})

const classModel: mongoose.Model<Iclass> = mongoose.model<Iclass>("classes", classSchema)

export default classModel;