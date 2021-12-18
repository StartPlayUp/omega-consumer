import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ContentContainer from "../../../components/Board/ContentPage/ContentContainer";
import Link from "next/link";
import PostList from "../../../components/Board/PageContainer/index";
import { Pagination } from "antd";
import { NOTICE_BOARD } from "../../../constants/constant/category";
const UserLink = ({ id }) => (
  <Link href={`/${id}/writeBoard`}>
    <a className="ml-auto w-32 align-middle border-2 rounded-xl flex items-center space-x-4 justify-center bg-blue-400">
      <div className="font-extrabold text-white">글쓰기</div>
    </a>
  </Link>
);
const PostContentContainer = ({ posts, post }) => {
  console.log(post);
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
        <ContentContainer post={post} />
        <PostList posts={posts.slice(15 * (page - 1), 15 * page)} />
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
export const getServerSideProps = async (context) => {
  try {
    const { category, postContent } = context.query;
    console.log(postContent);
    const { data: { success: getPostsSuccess, posts } } = await axios.get(
      `http://localhost:5000/api/post/getCategoryPosts?category=${category}`
    );
    const { data: { success: getPostSuccess, post } } = await axios.get(
      `http://localhost:5000/api/post/getPost?postUuid=${postContent}`
    );
    if ((getPostsSuccess || posts.length == 0) && getPostSuccess) {
      return {
        props: {
          posts,
          post,
        },
      };
    }
    else {
      return {
        redirect: {
          permanent: false,
          destination: "/",
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
    };
  }
};
export default PostContentContainer;
