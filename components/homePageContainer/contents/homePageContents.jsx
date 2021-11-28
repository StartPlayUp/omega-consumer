import React from "react";
import HomepagePost from "./homepagePost";
const HomePageContent = ({ post }) => {
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

export async function getStaticProps() {
  const res = {};
  const post = {
    testPosts: [
      {
        id: 1,
        User: {},
      },
    ],
  };
}
export default HomePageContent;
