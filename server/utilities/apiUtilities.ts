import { User } from '../typeorm/entity/User';

const sanitizeUser = (user: User) => {
    const { password, ...userWithOutPassword } = user;
    return userWithOutPassword;
};


export {
    sanitizeUser,
};