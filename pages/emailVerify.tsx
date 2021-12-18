import type { NextPage } from 'next';
import styled from 'styled-components';
import { Button } from 'antd';
import axios from 'axios'
const Home: NextPage = (): any => {
    const onClickHandler = async () => {
        const { data: { success } } = await axios.get("http://localhost:5000/api/user/sendVerifyEmail")
        const test = await axios.get("http://localhost:5000/api/user/sendVerifyEmail")
        console.log("request", test.request)
        alert(`${success}  `)
    }


    return (
        <div className="flex flex-col">
            <div className="self-center mx-5">
                <div className="self-center">현재 인증 메일은 { }로 발송되었습니다.</div>
                <div className="flex flex-col">
                    <div className="self-center">인증메일을 받지 못하셨나요?</div>
                    <Button type="primary" block onClick={onClickHandler}>인증메일 재전송</Button>
                    <Button type="dashed" block>메일 주소 변경</Button>
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps = async () => {
    try {
        const { data: { success, user } } = await axios.get("http://localhost:5000/api/user/getUser");
        if (success) {
            return {
                props: {
                    user,
                },
            };
        } else {
            console.log("로그인 하세요");
            console.log(success)
            console.log(user)
            return {
                redirect: {
                    permanent: false,
                    destination: "/",
                },
            };
        }
    } catch (err) {
        console.log("post get error : ", err);
        console.log("서버가 이상이 생겨 포스트를 못가져옴");
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }
};


export default Home
