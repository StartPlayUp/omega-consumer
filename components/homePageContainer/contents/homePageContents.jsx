import React from "react";
import HomepagePost from "./homepagePost";
const HomePageContent = () => {
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
