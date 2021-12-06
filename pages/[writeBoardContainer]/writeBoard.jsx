import React, { useState, useEffect } from "react";
import Editor from "../../components/Editor/CKEditor";
import { useRouter } from "next/router";
const WriteBoard = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [boardName, setBoardName] = useState("");

  const router = useRouter();
  const { writeBoardContainer } = router.query;

  console.log(router.query);
  useEffect(() => {
    setEditorLoaded(true);
    if (writeBoardContainer === "noticeBoard") {
      setBoardName("공지사항");
    }
  }, []);
  return (
    <form action="/api/post/sendPost" method="post">
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
              <button className=" font-extrabold text-white">글 올리기</button>
            </div>
          </div>
        </div>
        <div></div>
        <div className="lg:w-1/2 w-full">
          <Editor
            name="description"
            onChange={(data) => {
              setData(data);
            }}
            editorLoaded={editorLoaded}
          />
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
              <button className=" font-extrabold text-white">글 올리기</button>
            </div>
          </div>
        </div>

        {JSON.stringify(data)}
      </div>
    </form>
  );
};

export default WriteBoard;
