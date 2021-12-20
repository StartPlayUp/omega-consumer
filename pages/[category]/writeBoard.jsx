import React, { useState, useEffect, useCallback } from "react";
import Editor from "../../components/Editor/CKEditor";
import { useRouter } from "next/router";
import axios from "axios";
import UseInput from "../../components/hooks/useInput";
import Link from "next/link";

const WriteBoard = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const onChangeData = (data) => {
    setData(data);
  };

  const [boardName, setBoardName] = useState("");
  const [postTitle, postTitleHandler] = UseInput("");
  const router = useRouter();
  const { category } = router.query;
  console.log(router.query);
  useEffect(() => {
    setEditorLoaded(true);
    if (category === "noticeBoard") {
      setBoardName("공지사항");
    }
  }, [category]);
  const ReturnToPostList = ({ category }) => {
    return (
      <Link href={`/${category}`}>
        <a>
          <button
            className=" font-extrabold text-white"
            onClick={onChangeSendPost}
          >
            글 올리기
          </button>
        </a>
      </Link>
    );
  };
  const onChangeSendPost = async () => {
    try {
      const sendPoseResult = await axios.post("/api/post/sendPost", {
        title: postTitle,
        content: data,
        category,
      });
      console.log(sendPoseResult);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex lg:w-1/2 m-5 w-full flex-row">
        <h3 className="left-0 text-4xl flex-none">{boardName}</h3>
        <div
          className="ml-auto
                    w-32
                    align-middle border-2
                    rounded-xl flex items-center space-x-4 justify-center bg-blue-400
                    "
        >
          <div className="flex-shrink-0">
            <div className="flex-shrink-0">
              <ReturnToPostList category={category} />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="lg:w-1/2 w-full">
        <input
          placeholder="제목을 입력하세요"
          onChange={postTitleHandler}
        ></input>
        <Editor onChange={onChangeData} editorLoaded={editorLoaded} />
        <div
          className="ml-auto
                    mt-5
                    h-10
                    w-32
                    align-middle border-2
                    rounded-xl flex items-center space-x-4 justify-center bg-blue-400
                    "
        >
          <div className="flex-shrink-0">
            <ReturnToPostList category={category} />
          </div>
        </div>
      </div>
      {JSON.stringify(data)}
    </div>
  );
};

export default WriteBoard;
