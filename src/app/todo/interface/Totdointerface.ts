import { Document } from "mongoose"

export interface Todo extends Document{
    user_ID:string
    date:Date,
    Task:string
}