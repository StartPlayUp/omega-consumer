import React, { useState } from "react";
import { useEffect } from "react";
import { NOTICE_BOARD } from "../../../constants/constant/category";
const Posts = ({ posts }) => {
  return (
    <div className="bg-white w-full h-full">
      {Object.keys(posts).map((i) => (
        <div key={posts.uuid}>
          <div>
            <button className="flex">
              <div>{posts[i].post_category}</div>
              <div>{posts[i].post_title}</div>
              <div className="">
                <div>{posts[i].post_updatedAt.slice(0, 19).split("T")}</div>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
