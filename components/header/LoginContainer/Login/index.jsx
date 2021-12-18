import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../../reducer/user";
import axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";
const Login = () => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      const loginResult = await axios.post("/api/user/login", {
        id: values.id,
        password: values.password,
      });
      console.log(loginResult);
      if (loginResult.data.success) {
        dispatch(loginAction(loginResult.data.user.nickname));
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
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
              message: "아이디를 작성해주십시오.",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 작성해주십시오.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            {/* <Button type="primary" htmlType="submit" onClick={onSubmit}> */}
            로그인
          </Button>
        </Form.Item>
      </Form>
      {/* 

      <div>아이디 확인용 {inputs.id}</div>
      <div>비번</div>
      <input
        type="password"
        onChange={onChange}
        name="password"
        value={password}
        className="border-2"
      ></input>
      <div>비밀번호 확인용 {inputs.password}</div> */}
    </>
  );
};

export default Login;
