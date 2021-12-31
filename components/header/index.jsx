import LoginModal from "./LoginContainer/index";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducer/user";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import Link from "next/link";
const Header = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const onLogoutHandler = useCallback(() => {
    dispatch(logoutRequestAction());
  }, [dispatch]);
  const [mobileView, setMobileView] = useState({
    mobile: false,
  });
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth <= 1024
        ? setMobileView({
            ...mobileView,
            mobile: true,
          })
        : setMobileView({
            ...mobileView,
            mobile: false,
          });
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  console.log(mobileView);
  return (
    <header>
      <nav className="w-full h-16 border-b-2">
        <div className="flex mt-3 w-full h-full">
          <ul className="flex xl:ml-16 h-full xl:w-4/5 w-11/12">
            <li className="xl:text-5xl lg:text-3xl  text-lg m-auto mr-2 xl:w-2/5 md:w-4/12">
              <Link href="/" className="text-black" passHref>
                <a style={{ color: "black" }}>OmegaComsumer</a>
              </Link>
            </li>
            <li className="text-2xl m-auto w-44 text-center">
              <Link href="/noticeBoard">
                <a style={{ color: "black" }}>
                  {mobileView.mobile ? (
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
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  ) : (
                    <>공지사항</>
                  )}
                </a>
              </Link>
            </li>
            <li className="w-44 m-auto text-2xl text-center">
              <Link href="/review">
                <a style={{ color: "black" }}>
                  {mobileView.mobile ? (
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
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  ) : (
                    <>리뷰</>
                  )}
                </a>
              </Link>
            </li>
            <li className="w-44 m-auto text-2xl text-center">
              <Link href="/game">
                <a style={{ color: "black" }}>
                  {mobileView.mobile ? (
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
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <>게임</>
                  )}
                </a>
              </Link>
            </li>
            <li className="w-44 m-auto text-2xl text-center">
              <Link href="/programming">
                <a style={{ color: "black" }}>
                  {mobileView.mobile ? (
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
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  ) : (
                    <>프로그래밍</>
                  )}
                </a>
              </Link>
            </li>
            <li className="w-44 m-auto text-2xl text-center">
              <Link href="/freeBoard">
                <a style={{ color: "black" }}>
                  {mobileView.mobile ? (
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
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  ) : (
                    <>자유</>
                  )}
                </a>
              </Link>
            </li>
          </ul>
          <ul>
            {me ? (
              <li className="absolute lg:right-0 top-2 h-full">
                <div>
                  {mobileView.mobile ? (
                    <button
                      onClick={onLogoutHandler}
                      className="absolute top-6"
                    >
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
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                  ) : (
                    <>
                      <div className="xl:w-56">{me}님</div>
                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={onLogoutHandler}
                      >
                        로그아웃
                      </Button>
                    </>
                  )}
                </div>
              </li>
            ) : (
              <li className="absolute lg:right-3 lg:top-6 top-8 h-full">
                <div className="w-full ml-auto">
                  <LoginModal mobileView={mobileView} />
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
