import classModel from "../models/classModel"
import teacherModel from "../models/teacherModel"



export const CreateTeacher = async(newTeacher:any) => {
    try {        
        const {name, password, email, nameClass} = newTeacher
        const classAlredy =  classModel.findOne({ name: nameClass })
        
        if (!!classAlredy) {
            throw new Error("Class already exists,Write another name")
          }
            
        const dbnewTeacher = new teacherModel({
            name,
            password,
            email,
            nameClass            
        })
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