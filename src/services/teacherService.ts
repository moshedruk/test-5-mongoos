
import { Iteacher } from "../interface/teacherInterface";
import classModel from "../models/classModel"
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


// export const GetAllUser = async() => {
//     try {
//         const users = await userModel.find({})
//         return users
//     } catch (err) {
//         console.error(err)
//         throw err
//     }
// }

// export const GetUserById = async(myuser:any) => {
//     try {
//         const user = await userModel.findOne({_id:myuser})
//         return user
//     } catch (err) {
//         console.error(err)
//         throw err        
//     }
// }