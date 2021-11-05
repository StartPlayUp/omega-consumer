import React, { useState } from "react";
import Modal from "react-modal";
function Login() {
  const [open, setOpen] = useState(false);
  function modalOpen() {
    setOpen(!open);
  }

  return (
    <>
      <button className="ml-96" onClick={modalOpen}>
        로그인
      </button>
      <Modal
        isOpen={open}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left:0,
            right: 0,
            bottom:0
          },
          content: {
            position: 'absolute',
            top: '10%',
            left: '30%',
            right: '30%',
            border: '2px solid #000000',
            background: '#FFFFFF',
            overflow:'auto'
            
          }
        }}
      >
        로그인 테스트
        <button className="hover:scale-110" onClick={modalOpen}>
          닫기
        </button>
      </Modal>
    </>
  );
}
export default Login;

Modal.setAppElement(document.getElementById("root"));