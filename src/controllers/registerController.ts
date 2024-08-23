import { Request, Response } from "express";

export async function registerController(request:Request, response:Response){
    const {name,eamil,password}= request.body
}