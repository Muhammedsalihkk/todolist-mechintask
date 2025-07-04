import { model, Schema } from "mongoose";
import { Todo } from "../interface/Totdointerface";


const tosoSchema=new Schema<Todo>({
    user_ID:{type:String,required:true},
    date:{type:Date,default:Date.now()},
    Task:{type:String,required:true},
})

const todomodel=model<Todo>("todos",tosoSchema)
export default todomodel