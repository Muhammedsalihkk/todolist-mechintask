import { Request, response, Response } from "express";
import todomodel from "../model/Todomodel";


export const Add_todo = async (req: Request, res: Response) => {
    try {
        const data = req.body
        if(!data.task){
            res.status(404).json({message:"task is requird"})
        }
        const response = await todomodel.create({ user_ID: res.locals.user_id, Task: data.task })
        res.status(200).json({ message: response })
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
}
export const Gett_todo = async (req: Request, res: Response) => {
    try {
        const response = await todomodel.find({ user_ID: res.locals.user_id })
        res.status(200).json({ response })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
export const delete_todo=async(req:Request,res:Response)=>{
        try{
        const id=req.params.id
        console.log(id);
        
        const data=await todomodel.findByIdAndDelete(id)
        res.status(200).json({message:"deleted success"})
        }
        catch(error){
            res.status(500).json({message:"delete message"})
        }

}