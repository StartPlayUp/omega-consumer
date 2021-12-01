import React, { useEffect, useState } from "react";
import HomepagePost from "./homepagePost";
import axios from "axios";
const HomePageContent = () => {
  useEffect(() => {
    (async () => {
      try {
        console.log("asdf2");
        const res = await axios.get("/api/post/getPosts");
        if (res.data.success) {
          const posts = res.data.post;
          console.log(posts);
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
        <HomepagePost />
        <HomepagePost />
      </div>
      <div>안녕안녕</div>
    </div>
  );
};

export default HomePageContent;
