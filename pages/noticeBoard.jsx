import React from "react";
import NoticeContainer from "../components/Board/Notice/NoticeContainer";
const noticeBoard = () => {
  return (
    <div className="flex h-screen place-items-center flex-col">
      <div className="w-3/4 h-9 flex">
        <div className="relative ml-16 text-4xl">공지사항</div>
        <button className="relative ml-auto mr-24 bg-blue-900 text-white">
          글쓰기
        </button>
      </div>
      <NoticeContainer />
    </div>
  );
};

export default noticeBoard;
