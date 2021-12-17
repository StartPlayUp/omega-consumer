import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = (): any => {
    return (
        <div className="flex flex-col">
            <div className="self-center">
                이메일로 발송된 주소로 접속해주세요.
            </div>
            <div className="self-center">현재 인증 메일은 { }로 발송되었습니다.</div>
        </div>
    )
}


export default Home
