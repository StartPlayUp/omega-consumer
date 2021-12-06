import LoginModal from "./LoginContainer/index";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { logoutAction } from "../../reducer/user";
import { useDispatch } from "react-redux";
import Link from "next/link";
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
              <Link href="/">OmegaComsumer</Link>
            </li>
            <li className="text-2xl m-3 px-16">
              <Link href="/noticeBoard">공지사항</Link>
            </li>
            <li className="text-2xl m-3">게시판</li>
          </ul>
          <ul>
            <li className="absolute lg:right-5 m-3">
              {isLoggedIn ? (
                <div className="">
                  <div>{me}님</div>
                  <button onClick={logoutFunction}>로그아웃</button>
                </div>
              ) : (
                <LoginModal />
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
