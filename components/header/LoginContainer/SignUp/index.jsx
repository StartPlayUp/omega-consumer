import React, { useState } from "react";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    id: "",
    password: "",
    nickname: "",
  });
  const { email, id, password, nickname } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <div>
      <form action="/api/user/register" method="post">
        <div>아디</div>
        <input
          type="text"
          onChange={onChange}
          id="id"
          name="id"
          value={id}
          className="border-2"
        ></input>
        <div> 아이디 확인용 {inputs.id}</div>
        <div>닉네임</div>
        <input
          type="text"
          className="border-2"
          onChange={onChange}
          id="nickname"
          name="nickname"
          value={nickname}
        ></input>
        <div> 닉네임 확인용 {inputs.nickname}</div>
        <button className="border-2">아이디 중복체크</button>
        <div>비번</div>
        <input
          type="passowrd"
          onChange={onChange}
          name="password"
          value={password}
          className="border-2"
        ></input>
        <div> 비밀번호 확인용 {inputs.password}</div>
        <div>비번확인</div>
        <input type="password" id="password" className="border-2"></input>
        <div>email</div>
        <input
          type="email"
          onChange={onChange}
          name="email"
          value={email}
          id="email"
          className="border-2"
        ></input>
        <div> 이메일 확인용 {inputs.email}</div>
        <button className="border-2">회원가입하기</button>
      </form>
    </div>
  );
};
export default SignUp;
