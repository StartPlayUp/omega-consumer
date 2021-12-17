import { useRouter } from "next/router";
import React, { useState } from "react";
import PostList from "../../components/Board/PageContainer/index";
import Link from "next/link";
import axios from "axios";
import { Pagination } from "antd";
import { useEffect } from "react";
import { NOTICE_BOARD } from "../../constants/constant/category";

const UserLink = ({ id }) => (
  <Link href="/[category]/writeBoard" as={`${id}/writeBoard`}>
    <a className="ml-auto w-32 align-middle border-2 rounded-xl flex items-center space-x-4 justify-center bg-blue-400">
      <div className="font-extrabold text-white">글쓰기</div>
    </a>
  </Link>
);
const BoardWrapper = ({ posts,post }) => {
  const router = useRouter();
  const { category } = router.query;
  const [boardName, setBoardName] = useState("");

  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("NOTICE_BOARD : ", NOTICE_BOARD);
    if (category === NOTICE_BOARD) {
      setBoardName("공지사항");
    } else {
      setBoardName(category);
    }
  }, [category]);
    return (
      <div className="w-full h-full bg-slate-500">
        <div className="flex place-items-center flex-col">
          <div className="w-3/4 h-9 flex m-5">
            <div className="flex-none ml-16 text-4xl">{boardName}</div>
            <UserLink id={category} comment="글쓰기"></UserLink>
          </div>
          <PostList/>
          {/* <PostList posts={posts.slice(15 * (page - 1), 15 * page)} /> */}
          <div className="mb-3">
            <Pagination
              current={page}
              onChange={setPage}
              defaultPageSize={15}
              total={posts.length}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    );
};

export default BoardWrapper;
