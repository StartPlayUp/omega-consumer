import { validate } from 'class-validator';
import { returnUser, returnApi } from '../types/InterfaceReturn';
import { ICreateUser, ILoginUser, IReadUser } from '../types/service/InterfaceUser';
import { User } from '../typeorm/entity/User';
import bcrypt from 'bcrypt';






const createUser = async (userData: ICreateUser): Promise<returnUser> => {
    const { id, nickname, email, password, emailToken, isVerified } = userData;
    try {
        const user = User.create({
            id,
            nickname,
            email,
            password,
            role: 'user',
            emailToken,
            isVerified
        });

        const errors = await validate(user)
        console.log("createUser error check : ", errors)
        if (errors.length > 0) throw errors

        await user.save()
        return {
            success: true,
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}

const deleteUser = async (userData: ICreateUser): Promise<returnUser> => {
    const { id, nickname, email, password } = userData;
    try {
        const user = User.create({ id, nickname, email, password, role: 'user' });

        // 추가해야 검사해줌
        const errors = await validate(user)
        if (errors.length > 0) throw errors
        await user.save()
        return {
            success: true,
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}

const updateUser = async (userData: ICreateUser): Promise<returnUser> => {
    const { id, nickname, email, password } = userData;
    try {
        const user = User.create({ id, nickname, email, password, role: 'user' });

        // 추가해야 검사해줌
        const errors = await validate(user)
        if (errors.length > 0) throw errors
        await user.save()
        return {
            success: true,
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}

const getUserFromId = async (userData: IReadUser): Promise<returnUser> => {
    const { id } = userData;
    try {
        const user = await User.findOneOrFail({ id });
        const userWithoutPassword = {
            ...user,
            password: undefined,
            emailToken: undefined,
            isVerified: undefined
        }
        return {
            success: true,
            user: userWithoutPassword
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}

const loginCheckUser = async (userData: ILoginUser): Promise<returnUser> => {
    const { id, password } = userData;
    try {
        const user = await User.findOneOrFail({ id });
        const match = await bcrypt.compare(password, user.password)
        if (!match) throw "비밀번호가 일치하지 않습니다."
        return {
            success: true,
            nickname: user.nickname
        }
    } catch (error: any) {
        return {
            success: false,
            error
        }
    }
}

const verifyEmailUser = async ({ emailToken }: { emailToken: string }): Promise<returnUser> => {
    try {
        const user = await User.findOneOrFail({ emailToken });
        console.log(user)
        user.emailToken = null;
        user.isVerified = true;
        await user.save();
        return {
            success: true
        }
    } catch (error) {
        return {
            success: false
        }
    }
}

const checkEmailVerifyFromId = async ({ id }: { id: string }): Promise<returnUser> => {
    try {
        const user = await User.findOneOrFail({ id })
        console.log("user : ", user)
        if (user.isVerified) {
            return {
                success: true
            }
        }
        else {
            return {
                success: false,
                error: "이메일 인증을 받아야 합니다."
            }
        }
    } catch (error) {
        return {
            success: false,
            error: "아이디가 없습니다."
        }
    }
}

export { createUser, getUserFromId, loginCheckUser, verifyEmailUser, checkEmailVerifyFromId }
