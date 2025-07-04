import {Request,Response, NextFunction } from "express";
import jwt, { decode }  from "jsonwebtoken";

export const authverification=(req:Request,res:Response,next:NextFunction)=>{
        const {token}=req.cookies
        if(!token){
            res.status(401).json({message:"un authrized"})
        }
        else{
            const decoded:any= jwt.verify(token,process.env.JWT_SECRET as string)
            if(!decode){
                res.status(404).json({message:"invalid token"})
            }
            else{
                res.locals.user_id=decoded.user_id
                next()
            }
            
    }
        

        
        
}