import LoginModal from "./LoginContainer/index";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { logoutAction } from "../../reducer/user";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import Link from "next/link";
import NOTICE_BOARD from "../../constants/constant/category";
const Header = () => {
  const dispatch = useDispatch();
  const { me, isLoggedIn } = useSelector((state) => state.user);
  const logoutFunction = () => {
    dispatch(logoutAction());
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
              <Link href="/noticeBoard" className="text-black" passHref>
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
