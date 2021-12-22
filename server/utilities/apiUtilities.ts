import { User } from '../typeorm/entity/User';
import nodemailer from 'nodemailer';
import config from '../config'
import crypto from 'crypto';

const sanitizeUser = (user: User): any => {
    const { password, emailToken, ...userWithOutPassword } = user;
    return userWithOutPassword;
};


const sendMail = async ({ email, emailToken, nickname, host }: any) => {
    const transporter = nodemailer.createTransport(config.mailConfig);
    const mailOptions = {
        from: '"Verify your email <startPlayUp@gmail.com>',
        to: email,
        subject: 'codewithsid = - verfiy your email',
        html: `
            <h2> ${nickname} 회원님</h2>
            <h4> 가입하시려면 이메일 인증이 필요합니다. 아래 인증하기 버튼을 눌러주세요</h4>
            <a href="http://${host}/api/user/verify-email?token=${emailToken}">인증하기</a>
        `
    }
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return {
                success: false,
                message: "인증 메일 보내기에 실패하였습니다."
            };
        }
        else {
            return {
                success: true,
                message: "인증 메일을 보냈습니다."
            };
        }
    })
    return {
        success: false,
        message: "test"
    }
}

// const wrapedSendMail = async ({ email, nickname, host, emailToken }: any) => {
//     const transporter = nodemailer.createTransport(config.mailConfig);
//     const mailOptions = {
//         from: '"Verify your email <startPlayUp@gmail.com>',
//         to: email,
//         subject: 'codewithsid = - verfiy your email',
//         html: `
//             <h2> ${nickname} 회원님</h2>
//             <h4> 가입하시려면 이메일 인증이 필요합니다. 아래 인증하기 버튼을 눌러주세요</h4>
//             <a href="http://${host}/api/user/verify-email?token=${emailToken}">인증하기</a>
//         `
//     }

//     return new Promise((resolve, reject) => {
//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.log("error is " + error);
//                 resolve(false); // or use rejcet(false) but then you will have to handle errors
//             }
//             else {
//                 console.log('Email sent: ' + info.response);
//                 resolve(true);
//             }
//         })
//     }
// }



export {
    sanitizeUser,
    sendMail,
};