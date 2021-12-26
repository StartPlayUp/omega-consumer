import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import HomepagePost from "./homepagePost";
import axios from "axios";
const HomePageContent = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col lg:flex-row justify-center ">
        <HomepagePost mainPageContentTitle={"noticeBoard"} />
        {/* <HomepagePost mainPageContentTitle={etcBoard} /> */}
      </div>
      <div>안녕안녕</div>
    </div>
  );
};
export default HomePageContent;
