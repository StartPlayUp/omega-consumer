import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { checkEmailVerifyFromId } from '../../service/User.service';
// import cookie from 'cookie-parser'

declare namespace Express {
    export interface Res extends Response {
        user: string
    }
}


const loginRequired = async (req: Request, res: any, next: NextFunction) => {
    const token = req.cookies['access-token']
    const secret: any = process.env.JWT_SECRET
    if (token) {
        const validateToken: any = jwt.verify(token, secret);
        if (validateToken) {
            res.user = validateToken.id
            next()
        }
        else {
            console.log("toekn expires");
            res.redirect('/user/login')
        }

    }
    else {
        console.log('token not found')
        res.redirect('/user/login')
    }
}

const emailVerified = async (req: Request, res: any, next: NextFunction) => {
    const id = req.body.id as string;
    console.log(id)
    const result = await checkEmailVerifyFromId({ id });
    if (result.success) {
        next()
    }
    else {
        console.log("이메일 인증 받아야해요..")
    }
}

export { loginRequired, emailVerified }