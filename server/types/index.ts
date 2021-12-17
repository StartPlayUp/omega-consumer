import { User } from '../typeorm/entity/User';

declare global {
    namespace Express {
        interface Request {
            user: {
                id?: string;
            };
        }
    }
}