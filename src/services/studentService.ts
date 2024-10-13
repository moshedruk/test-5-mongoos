import { Istudent } from "../interface/studentInterface";
import classModel from "../models/classModel"
import studentModel from "../models/studentModel";
import bcrypt from 'bcrypt'

export const Createstudent = async(newstudent:Istudent) => {
    try {        
        const {name, password, email, myclass,role} = newstudent
        const hashPassword = await bcrypt.hash(password,10)              
        const dbnewstudent = new studentModel({
            name,
            password:hashPassword,
            email,
            myclass,      
            role     
        })
        console.log(dbnewstudent);
        
        await classModel.updateOne(
            { _id: myclass },
            { $addToSet: { students: dbnewstudent._id } }
          )        
        await dbnewstudent.save()
        return dbnewstudent
    }catch (err) {
        console.error(err)
        throw err        
    }
}