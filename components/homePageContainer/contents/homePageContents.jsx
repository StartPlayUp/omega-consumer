import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import HomepagePost from "./homepagePost";
import axios from "axios";
const HomePageContent = () => {
  const [noticeBoard, setNoticeBoard] = useState({});
  const [etcBoard, setEtcBoard] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/post/getPosts");
        if (res.data.success) {
          const posts = res.data.posts;
          const serverToClientNoticeBoard = [];
          const serverToClientEtcBoard = [];
          console.log("aaasdasddd", posts);
          posts.forEach((element) => {
            serverToClientNoticeBoard.push({
              title: element.post_title,
              uuid: element.post_uuid,
            });
          });
          if (serverToClientNoticeBoard.length !== 0) {
            setNoticeBoard(serverToClientNoticeBoard);
          }
        } else {
          console.log("서버가 이상이 생겨 포스트를 못가져옴");
        }
      } catch (err) {
        console.log("post get error : ", err);
        alert("서버가 이상이 생겨 포스트를 못가져옴");
      }
    })();
  }, []);
  console.log("noticeBoard",noticeBoard)
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col lg:flex-row justify-center ">
        <HomepagePost mainPageContentTitle={noticeBoard} />
        <HomepagePost mainPageContentTitle={etcBoard} />
      </div>
      <div>안녕안녕</div>
    </div>
  );
};
// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/api/post/getPosts");
//     const data = await res.json();
//     console.log("test");
//       return { props: { data } };
//   } catch {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
// };
export default HomePageContent;
