import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Editor from "../../Editor/CKEditor";
import { Button, Input } from "antd";
import { useSelector } from "react-redux";
import immer from "immer";
import {
  useMutation,
  useQueryClient,
} from "react-query";

import axios from "axios";

const CommentsRequest = ({
  comment,
  postUuid,
  setComment,
  commentUuid,
}) => {
  const { me } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ postUuid, content }) =>
      axios
        .post("http://localhost:5000/api/comment/sendMemberComment", {
          postUuid,
          content,
          parentUuid: commentUuid,
        })
        .then((res) => {
          return res.data;
        }),
    {
      onMutate: async ({ postUuid, content }) => {
        setComment("");
        await queryClient.cancelQueries(["getComments", postUuid]);
        const previousValue = queryClient.getQueryData([
          "getComments",
          postUuid,
        ]);
        queryClient.setQueryData(["getComments", postUuid], (old) => {
          const len = Object.keys(old.comment).length + 1;
          return {
            comment: {
              ...old.comment,
              len: {
                annonymouseId: "익명 OO",
                childComments: [],
                content,
                ipAddress: "X.X.",
                isMember: me ? 1 : 0,
                nickname: me && me,
                updatedAt: "2021-12-26T03:17:01.870Z",
                uuid: "test",
              },
            },
          };
        });

        return previousValue;
      },
      // On failure, roll back to the previous value
      onError: (err, variables, previousValue) =>
        queryClient.setQueryData(["getComments", postUuid], previousValue),
      // After success or failure, refetch the todos query
      onSettled: () => {
        queryClient.invalidateQueries(["getComments", postUuid]);
      },
    }
  );
  return (
    <div>
      {mutation.isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div></div> : null}

          <Button
            onClick={() => {
              mutation.mutate({
                content: comment,
                postUuid,
              });
            }}
          >
            {" "}
            댓글 쓰기{" "}
          </Button>
        </>
      )}
    </div>
  );
};

const WriteComment = ({ commentUuid }) => {
  const { me } = useSelector((state) => state.user);
  const router = useRouter();
  const { postContent: postUuid } = router.query;
  console.log(router.query);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [comment, setComment] = useState("");
  console.log(comment);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div className="w-full bg-gray-300">
      {me ? <div>{me}</div> : <Input placeholder="닉네임을 입력하세요"></Input>}
      <Editor
        comment={comment}
        onChange={setComment}
        editorLoaded={editorLoaded}
      />
      <div className="flex">
        <div className="ml-auto mr-3">
          <CommentsRequest
            comment={comment}
            postUuid={postUuid}
            setComment={setComment}
            commentUuid={commentUuid}
          />
        </div>
      </div>
    </div>
  );
};

export default WriteComment;
