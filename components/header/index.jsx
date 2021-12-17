import LoginModal from "./LoginContainer/index";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { logoutAction } from "../../reducer/user";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import Link from "next/link";
import NOTICE_BOARD from "../../constants/constant/category";
import axios from 'axios';
const Header = () => {
  const dispatch = useDispatch();
  const { me, isLoggedIn } = useSelector((state) => state.user);
  const logoutFunction = async () => {
    try {
      const logoutResult = await axios.post("/api/user/logout");
      if (logoutResult.data.success) {
        dispatch(dispatch(logoutAction()));
      } else {
        alert(logoutResult.data.success);
        alert("로그아웃 실패 로그인 한지 확인하시오");
      }
    } catch (error) {
      console.log(error);
      alert("로그아웃 전송 실패");
    }
  };
  return (
    <header>
      <nav className="w-full h-16 border-b-2">
        <div className="flex mt-3 w-full">
          <ul className="flex ml-16 ">
            <li className="lg:text-5xl">
              <Link href="/" className="text-black" passHref>
                <a style={{ color: "black" }}>OmegaComsumer</a>
              </Link>
            </li>
            <li className="text-2xl m-3 px-16">
              <Link href="/noticeBoard">
                <a style={{ color: "black" }}>공지사항</a>
              </Link>
            </li>
            <li className="text-2xl m-3">게시판</li>
          </ul>
          <ul>
            <li className="absolute lg:right-5">
              {isLoggedIn ? (
                <div className="">
                  <div>{me}님</div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={logoutFunction}
                  >
                    로그아웃
                  </Button>
                </div>
              ) : (
                <div className=" m-3">
                  <LoginModal />
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
