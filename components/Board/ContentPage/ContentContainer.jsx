import React from "react";
import Content from "./Content";
const ContentContainer = () => {
  return (
    <div className="md:w-2/3 w-full bg-gray-200">
      <div className="ml-3 mr-3 ">
        <div className="mt-3 border-b-2 border-blue-400">
          <div className="w-full flex ">
            <div className="text-2xl">아니 이게 게임인가</div>
            <div className="ml-auto">2021-10-31</div>
          </div>
          <div className="w-full flex">
            <div className="font-bold">안녕하세요님</div>
            <div className="ml-auto"> 607회 조회</div>
            <div className="ml-3">댓글 3개</div>
          </div>
        </div>
        <div className="w-full flex flex-col h-full">
          <div className="mt-3 h-full">
            <Content />
          </div>
          <div className="w-full mt-72 flex justify-center">
            <div className="mr-3 w-28 h-28 border-2 flex justify-center bg-white shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <div className="ml-3 w-28 h-28 border-2 flex justify-center bg-white shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>
            </div>
          </div>
          <div className="ml-auto mt-5">
            <button className="mr-5 border-4 bg-white border-white w-28">
              글수정
            </button>
            <button className="border-4 bg-white border-white w-28">
              글삭제
            </button>
          </div>
          <div className="w-full border-4 border-blue-300 mt-3" />
          {/* <Comment /> */}
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
