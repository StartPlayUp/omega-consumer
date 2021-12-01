import React,{useEffect, useState} from "react";

const HomepagePost = ({ mainPageContentTitle }) => {
  console.log(mainPageContentTitle);
  return (
    <div className="lg:w-1/4 md:w-1/2 pl-4 pr-4">
      <div className="flex flex-col border-4">
        {Object.keys(mainPageContentTitle).map((i) => (
          <div key={mainPageContentTitle[i].uuid}>
            {mainPageContentTitle[i].title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepagePost;
