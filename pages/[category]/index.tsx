import { useRouter } from "next/router";
import React, { useState } from "react";
import PostList from "../../components/Board/PageContainer/index";
import Link from "next/link";
import axios from "axios";
import { Pagination } from "antd";
import { useEffect } from "react";
import { post } from "superagent";
import { NOTICE_BOARD } from "../../constants/constant/category";
import { LOAD_MY_INFO_REQUEST } from '../../reducer/user.js';
import { END, Task } from "redux-saga";
import wrapper, { SagaStore } from './../../store/configureStore'
import { Store } from 'redux'


const UserLink = ({ id }: any) => (
  <Link href={`/${id}/writeBoard`}>
    <a className="ml-auto w-32 align-middle border-2 rounded-xl flex items-center space-x-4 justify-center bg-blue-400">
      <div className="font-extrabold text-white">글쓰기</div>
    </a>
  </Link>
);
const BoardWrapper = ({ posts, category }: any) => {
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
    <div className="bg-pink-200">
      <div className="w-full h-full">
        <div className="flex place-items-center flex-col">
          <div className="w-3/4 h-9 flex m-5">
            <div className="flex-none ml-16 text-4xl">{boardName}</div>
            <UserLink id={category} comment="글쓰기"></UserLink>
          </div>
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
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, query }) => {
  // const cookie = req ? req.headers.cookie : '';
  // console.log("cookie: ", cookie)
  // axios.defaults.headers.Cookie = '';
  // if (req && cookie) {
  //   axios.defaults.headers.Cookie = cookie;
  // }
  interface SagaStore extends Store {
    sagaTask: Task;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  await (store as SagaStore).sagaTask.toPromise();
  try {
    const { category } = query;
    const { data: { success, posts } } = await axios.get(
      `/api/post/getCategoryPosts?category=${category}`
    );
    console.log(success, posts)
    if (success || posts.length == 0) {
      return {
        props: {
          posts,
          category
        },
      };
    } else {
      console.log("res.data.success False");
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
});
export default BoardWrapper;
