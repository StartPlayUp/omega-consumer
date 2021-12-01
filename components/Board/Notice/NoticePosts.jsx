import React, { useState } from "react";

const NoticePosts = ({ posts }) => {
  console.log(posts);
  return (
    <div className="bg-gray-100 w-full h-full">
      {Object.keys(posts).map((i) => (
        <div key={posts.uuid}>
          <div>
            {posts[i].category === "noticeBoard" ? (
              <div className="flex">
                <div>{posts[i].index}</div>
                <div>{posts[i].category}</div>
                <div>{posts[i].title}</div>
                <div className="">
                  <div>{posts[i].createdAt}</div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticePosts;
