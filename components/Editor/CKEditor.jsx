import React, { useEffect, useRef } from "react";


const Editor = ({comment, onChange, editorLoaded }) => {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
<<<<<<< HEAD
=======
      // ClassicEditor: require("ckeditor5-custom-build/build/ckeditor"),
>>>>>>> 1e5d19701338ebf7145fa89b713e8f3988429aad
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={comment}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default Editor;
