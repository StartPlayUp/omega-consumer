import React, { useState, useEffect } from "react";
import Editor from "../components/Editor/CKEditor";

const Write = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div>
      <h3> 테스트입니다. </h3>
      <div>
        <Editor
          onChange={(data: string) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        />
      </div>

      {JSON.stringify(data)}
    </div>
  );
};

export default Write;
