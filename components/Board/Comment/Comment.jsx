import React from "react";
import { Button } from "antd";
const CommentContainer = () => {
  return (
    <div className="w-full mt-2 mb-2 border-2 border-black">
      <div className="flex w-full bg-gray-900 bg-opacity-10">
        <div className="ml-3">Lorem ipsum dolor sit amet consectetur</div>
        <div className="flex justify-end ml-auto mr-5 items-center">
          <div className="mr-10">
            <Button>수정</Button>
          </div>
          <div>
            <Button>삭제</Button>
          </div>
        </div>
      </div>
      <div className="m-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        labore eligendi maiores perspiciatis, deserunt ullam iste, quo fugit
        asperiores eum at libero veniam ducimus fuga commodi eos dolor nobis
        eveniet?
      </div>
    </div>
  );
};

export default CommentContainer;
