
import { IstudentInformtionDto } from "../DTOs/informtionStudentDTO";
import { Istudent } from "../interface/studentInterface";
import { Iteacher } from "../interface/teacherInterface";
import classModel from "../models/classModel"
import studentModel from "../models/studentModel";
import teacherModel from "../models/teacherModel" 
import bcrypt from 'bcrypt'




export const CreateTeacher = async(newTeacher:Iteacher) => {
    try {        
        const {name, password, email, nameClass,role} = newTeacher
        const hashPassword = await bcrypt.hash(password,10)              
        const dbnewTeacher = new teacherModel({
            name,
            password:hashPassword,
            email,
            nameClass,      
            role     
        })
        const dbclass = new classModel({
            name: nameClass,
            teacher: dbnewTeacher._id            
        })
        await dbclass.save()        
        await dbnewTeacher.save()
        return dbnewTeacher
    }catch (err) {
        console.error(err)
        throw err        
    }
}


export const addScore = async(idT:any,ids:any,newScore:IstudentInformtionDto) => {
    try {
        const {title,date,score} = newScore
        console.log(title,date,score);
        const findTeacher = await studentModel.find({myTeacher:idT})
        if(findTeacher){
            const student = await studentModel.findOneAndUpdate({myTeacher:idT,_id:ids}, {$push: {information: newScore}}, {new: true})
            return student
        }
        else{
            return {
                msg:"teacher is not of student"
            }
        }        
    } catch (err) {
        console.error(err)
        return {
            msg:"teacher is not of student"
        }
    }
}

export const setScore = async(idT:any,ids:any,newScore:IstudentInformtionDto) => {
    try {
        const {title,date,score} = newScore
        console.log(title,date,score);
        const findTeacher = await studentModel.find({myTeacher:idT})
        if(findTeacher){
            const student = await studentModel.findOneAndUpdate({myTeacher:idT,_id:ids}, {$set: {information: newScore}}, {new: true})
            return student
        }
        else{
            return {
                msg:"teacher is not of student"
            }
        }        
    } catch (err) {
        console.error(err)
        return {
            msg:"teacher is not of student"
        }
    }
}

export const GetmyStudents = async(idt:any,ids:any) => {
    try {        
        const students = await studentModel.findOne({myTeacher:idt ,_id:ids })  
        console.log(students);  
        return students?.information
    } catch (err) {
        console.error(err)
        throw err        
    }
}

export const GetallmyStudents = async(idT:any) => {
    try {
        const students = await classModel.findOne({teacher:idT }).populate('students')   
        console.log(students);    

        return students
    } catch (err) {
        console.error(err)
        throw err        
    }
}

// export const Getallaverage = async(idT:any) => {
//     try {
//         const students = await classModel.findOne({teacher:idT }).populate('stusents')   
//         let sumScore = 0;
//         let count = 0;        
//         students.stusents.forEach((student:any) => {
//             student.information.forEach((info:any) => {
//                 sumScore += info.score
//                 count++
//             })
//         })
//         const averageScore = sumScore / count
//         return averageScore
        
//     } catch (err) {
//         console.error(err)
//         throw err        
//     }
// }