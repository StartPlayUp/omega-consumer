import { useRouter } from "next/router";
import React, { useState } from "react";
import PostList from "../../components/Board/PageContainer/index";
import Link from "next/link";
import axios from "axios";
import { Pagination } from "antd";
import { useEffect } from "react";
import { post } from "superagent";

const UserLink = ({ id }) => (
  <Link href="/[writeBoardContainer]/writeBoard" as={`${id}/writeBoard`}>
    <a className="ml-auto w-32 align-middle border-2 rounded-xl flex items-center space-x-4 justify-center bg-blue-400">
      <div className="font-extrabold text-white">글쓰기</div>
    </a>
  </Link>
);
const BoardWrapper = ({ posts }) => {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);
  const [boardName, setBoardName] = useState("");

  const [page, setPage] = useState(1);
  useEffect(() => {
    if (category === "noticeBoard") {
      setBoardName("공지사항");
    } else {
      setBoardName(category);
    }
  }, [category]);
  return (
    <div className="flex place-items-center flex-col">
      <div className="w-3/4 h-9 flex m-5">
        <div className="flex-none ml-16 text-4xl">{boardName}</div>
        <UserLink id={category} comment="글쓰기"></UserLink>
      </div>
      <PostList posts={posts.slice(15 * (page - 1), 15 * page)} />
      <Pagination
        current={page}
        onChange={setPage}
        defaultPageSize={15}
        total={posts.length}
        showSizeChanger={false}
      />
    </div>
  );
};
export const getServerSideProps = async (context) => {
  try {
    const { category } = context.query;
    const res = await axios.get(
      `http://localhost:5000/api/post/getCategoryPosts?category=${category}`
    );
    if (res.data.success && res.data.posts.length) {
      const posts = res.data.posts;
      return {
        props: {
          posts,
        },
      };
    } else {
      console.log("res.data.success False");
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {
          posts: [],
        },
      };
    }
  } catch (err) {
    console.log("post get error : ", err);
    console.log("서버가 이상이 생겨 포스트를 못가져옴");
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {
        posts: [],
      },
    };
  }
};
export default BoardWrapper;
