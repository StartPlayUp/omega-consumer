import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { checkEmailVerifyFromId } from '../../service/User.service';
import requestIp from 'request-ip';
// import cookie from 'cookie-parser'

declare namespace Express {
    export interface Res extends Response {
        user: string
    }
}


const loginRequired = async (req: any, res: any, next: NextFunction) => {
    const token = req.cookies['access-token']
    const secret: any = process.env.JWT_SECRET
    if (token) {
        const validateToken: any = jwt.verify(token, secret);
        if (validateToken) {
            req.user = {
                id: validateToken.id
            }
            next()
        }
        else {
            console.log("token expires");
            res.redirect('/')
        }

    }
    else {
        console.log('token not found')
        res.redirect('/')
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
        console.log(result.error)
        return res.status(500).json(result)
    }
}

const ipMiddleware = (req: any, res: any, next: NextFunction) => {
    const clientIp = requestIp.getClientIp(req);
    console.log("test ip : ", clientIp);
    req.user.ipAddress = clientIp
    next();
};

export { loginRequired, emailVerified, ipMiddleware }