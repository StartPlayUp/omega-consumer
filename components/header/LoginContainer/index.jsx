import { Button } from "antd";
import React, { useState } from "react";
import Modal from "react-modal";
import Login from "./Login/index";
import SignUp from "./SignUp/index";
const LoginModal = ({ mobileView }) => {
  const [modalState, setModalState] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const changeSignUpLogin = () => {
    setIsSignUp(!isSignUp);
  };
  const changeModalState = () => {
    setModalState(!modalState);
  };
  console.log(mobileView);
  return (
    <>
      {mobileView.mobile ? (
        <button onClick={changeModalState}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </button>
      ) : (
        <div className="w-full ml-auto">
          <Button onClick={changeModalState}>로그인</Button>
        </div>
      )}

      <Modal
        isOpen={modalState}
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: "1",
          },
          content: {
            position: "absolute",
            top: "10%",
            left: "30%",
            right: "30%",
            border: "2px solid #000000",
            background: "#FFFFFF",
            overflow: "auto",
          },
        }}
      >
        <button onClick={changeModalState} className="border-2">
          닫기
        </button>
        {isSignUp ? (
          <>
            <SignUp />
            <button onClick={changeSignUpLogin} className="border-2">
              로그인
            </button>
          </>
        ) : (
          <>
            <Login />
            <button onClick={changeSignUpLogin} className="border-2">
              회원가입
            </button>
          </>
        )}
      </Modal>
    </>
  );
};

export default LoginModal;