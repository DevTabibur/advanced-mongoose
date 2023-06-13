import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserServices } from "./user.services";

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUserServices()
    res.status(200).json({
        message: `successfully getting ${user.length} users`,
        code: 200,
        data: user
    })
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDB(data)
    res.status(200).json({
        message: "successfully created user",
        code: 200,
        data: user
    })
}