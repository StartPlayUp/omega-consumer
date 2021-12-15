import { useRouter } from "next/router";
import React, { useState } from "react";
import Pagination from '../../../components/Board/Pagenation'
import NoticeContainer from '../../../components/Board/PageContainer'
import Link from "next/link";
import useInput from '../../../components/hooks/useInput'
import axios from 'axios';
import categoryList from '../../../constants/constant/category'
import Router from "next/router";

const Test = ({ posts }) => {
  const [page, setPage] = useState(1);
  const router = useRouter().query;
  const UserLink = ({ id }) => (
    <Link href="/[category]/writeBoard" as={`${id}/writeBoard`}>
      <a className="ml-auto w-32 align-middle border-2 rounded-xl flex items-center space-x-4 justify-center bg-blue-400">
        <div className="font-extrabold text-white">글쓰기</div>
      </a>
    </Link>
  );
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log(posts);
  return (
    <div className="flex h-screen place-items-center flex-col">
      <div className="w-3/4 h-9 flex m-5">
        <div className="flex-none ml-16 text-4xl">공지사항</div>
        <UserLink id="noticeBoard" comment="글쓰기"></UserLink>
      </div>
      <NoticeContainer posts={posts.slice((15 * (page - 1)), (15 * page))} />
      <Pagination page={page} count={posts.length} setPage={setPage} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const { category } = context.query;
    const res = await axios.get(`http://localhost:5000/api/post/getCategoryPosts?category=${category}`);
    if (res.data.success && res.data.posts.length) {
      const posts = res.data.posts;
      return {
        props: {
          posts
        }
      }
    } else {
      console.log("res.data.success False");
      return {
        redirect: {
          permanent: false,
          destination: '/'
        },
        props: {
          posts: []
        }
      }
    }
  } catch (err) {
    console.log("post get error : ", err);
    console.log("서버가 이상이 생겨 포스트를 못가져옴");
    return {
      redirect: {
        permanent: false,
        destination: '/'
      },
      props: {
        posts: []
      }
    }
  }
}

export default Test;
