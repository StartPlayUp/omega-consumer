import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../../reducer/user";
import axios from "axios";
const Login = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const { id, password } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onSubmit = async () => {
    try {
      const loginResult = await axios.post("/api/user/login", {
        id: inputs.id,
        password: inputs.password,
      });
      console.log(loginResult);
      if (loginResult.data.success) {
        dispatch(loginAction(loginResult.data.nickname));
      } else {
        alert(loginResult.data.success);
        alert("아이디 혹은 비밀번호를 다시 확인해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("아이디 혹은 비밀번호를 다시 확인해주세요.");
    }
  };
  return (
    <>
      <div>로그인 입니다</div>
      <div>아디</div>
      <input
        type="id"
        onChange={onChange}
        name="id"
        value={id}
        className="border-2"
      ></input>
      <div>아이디 확인용 {inputs.id}</div>
      <div>비번</div>
      <input
        type="password"
        onChange={onChange}
        name="password"
        value={password}
        className="border-2"
      ></input>
      <div>비밀번호 확인용 {inputs.password}</div>
      <button onClick={onSubmit} className="border-2">
        로그인
      </button>
    </>
  );
};

export default Login;
