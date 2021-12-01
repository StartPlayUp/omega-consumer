import React, { useEffect, useState } from "react";
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
          const posts = res.data.post;
          const serverToClientNoticeBoard = [];
          const serverToClientEtcBoard = [];
          posts.forEach((element) => {
            if (element.category === "noticeBoard") {
              serverToClientNoticeBoard.push({
                title: element.title,
                uuid: element.uuid,
              });
            } else {
              serverToClientEtcBoard.push({
                title: element.title,
                uuid: element.uuid,
              });
            }
          });
          if (serverToClientNoticeBoard.length !== 0) {
            setNoticeBoard(serverToClientNoticeBoard);
          }
          if (serverToClientEtcBoard.length !== 0) {
            setEtcBoard(serverToClientEtcBoard);
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

export default HomePageContent;
