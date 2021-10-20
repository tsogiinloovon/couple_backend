import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'
import { getUser, regUser } from './user.service'

//login
export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        const { email } = req.body
        console.log(email)
        const userResponse = await getUser(email)
        res.status(userResponse.statusCode).json(userResponse)
    } catch (error) {
        res.status(500).send(error)
    }
})

//register
export const registerUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userResponse = await regUser(req.body)
        res.status(userResponse.statusCode).json(userResponse)
    } catch (error) {
        res.status(500).send(error)
    }
})
