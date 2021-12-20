import React, { useState, useEffect } from "react";
import Editor from "../../Editor/CKEditor";
import { Button } from "antd";
const WriteComment = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const onChangeData = (data) => {
    setData(data);
  };
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div className="w-full bg-gray-300">
      <div>test</div>
      <Editor onChange={onChangeData} editorLoaded={editorLoaded} />
      <Button> 댓글 쓰기 </Button>
    </div>
  );
};

export default WriteComment;
