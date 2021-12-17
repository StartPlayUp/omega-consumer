import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ContentContainer from "../../../components/Board/ContentPage/ContentContainer";
import Link from "next/link";
import PostList from "../../../components/Board/PageContainer/index";
import { Pagination } from "antd";
import { NOTICE_BOARD } from "../../../constants/constant/category";
const UserLink = ({ id }) => (
  <Link href="/[category]/writeBoard" as={`${id}/writeBoard`}>
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
    // <div className="w-full flex justify-center">
    //
    // </div>
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
    let getPosts = false;
    let getPost = false;
    const res = await axios.get(
      `http://localhost:5000/api/post/getCategoryPosts?category=${category}`
    );
    const getPostRes = await axios.get(
      `http://localhost:5000/api/post/getPost?postUuid=${postContent}`
    );
    if (res.data.success && res.data.posts.length) {
      getPosts = true; //글 목록 불러오기
    } else {
      getPosts = false;
    }
    if (getPostRes.data.success) {
      getPost = true; //글 불러오기
    } else {
      getPost = false;
    }
    if (getPosts && getPost) {
      const posts = res.data.posts;
      const post = getPostRes.data.post;
      return {
        props: {
          posts,
          post,
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
          post: [],
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
export default PostContentContainer;
