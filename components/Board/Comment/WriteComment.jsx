import React, { useState, useEffect } from "react";
import Editor from "../../Editor/CKEditor";
import { Button, Input } from "antd";
import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from "axios";

const WriteComment = ({ }) => {
  const { me } = useSelector((state) => state.user)

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [comment, setComment] = useState("");
  const OnClickHandler = () => {
    // const { isLoading, error, data } = useQuery('repoData', () =>
    //   axios.get(`/api/comment/getComments?postUuid=${"09250b6f-78d3-4934-84d9-1456bdfe2e71"}`).then(res =>
    //     res.json()
    //   )
    // )
  }
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div className="w-full bg-gray-300">
      {me ?
        <div>{me}</div> :
        <Input placeholder="닉네임을 입력하세요"></Input>
      }
      <Editor onChange={setComment} editorLoaded={editorLoaded} />
      <div className="flex">
        <Button className="ml-auto" onClick={OnClickHandler}> 댓글 쓰기 </Button>
      </div>
    </div>
  );
};

export default WriteComment;
