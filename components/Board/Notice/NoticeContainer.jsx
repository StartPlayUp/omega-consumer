import React, { useState } from "react";

export default function NoticeContainer() {
  return (
    <div className="md:w-3/4 h-screen w-full border-b-4">
      <div className="w-full h-6 bg-gray-200">
        <ul className="flex w-full text-sm lg:text-base">
          <li className="w-10 text-center">No.</li>
          <li className="text-center w-32">카테고리</li>
          <li className="text-center w-1/2">제목</li>
          <li className="w-56 text-center">작성자</li>
          <li className="w-56 text-center">작성날짜</li>
          <li className="text-center w-24">조회수</li>
        </ul>
      </div>
      <div className="bg-gray-100 w-full h-full">아무말이나 하기</div>
    </div>
  );
}
