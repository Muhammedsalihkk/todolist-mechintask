import { model, Schema } from "mongoose";
import { User } from "../interface/Userinrerface";


const Userschema= new Schema<User>({
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true}
})

const userModel= model<User>("users",Userschema)
export default userModel