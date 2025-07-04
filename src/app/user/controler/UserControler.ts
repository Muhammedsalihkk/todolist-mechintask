import { Request, response, Response } from "express";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import { User } from "../interface/Userinrerface";
import userModel from "../models/Usermodel";

export const userRegister = async (req: Request, res: Response) => {

    try {
        const data: User = req.body
        const hashed=await bcrypt.hash(data.password,10)
        const respose = await userModel.create({ name: data.name, email: data.email, password: hashed })
        res.status(200).json({ message: respose })
    }
    catch(error:any){
        console.log(error.message);
        res.status(500).json({meesage:error.message})
    }

}
export const userLogin = async(req: Request, res: Response) => {
    const data = req.body
    if(!data.email||!data.password){
        res.status(403).json({message:"email and password is requird"})
    }    
    const response:any=await userModel.findOne({email:data.email})
    if(!response){
        res.status(404).json({message:"user not found"})
    }
    else{
        const decoded= await bcrypt.compare(data.password,response.password)
        if(!decoded){
            res.status(403).json({message:"password not match"})
        } 
        else{
            const token=jwt.sign({user_id:response._id},process.env.JWT_SECRET as string,{
                expiresIn:"1h"
            })
            res.cookie("token",token,{
                httpOnly:true,
                maxAge:1*60*60*1000,
                secure:false,
            }) 
            res.status(200).json({message:"success"})
        } 
    } 
}

export const logout=(req:Request,res:Response)=>{
        res.clearCookie("token")
        res.status(200).json({message:"logout success"})
}