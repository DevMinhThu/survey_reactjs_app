import { convertFromHTML, convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import Editor from "draft-js-plugins-editor";
import React, { useState } from "react";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

function CustomTitle(props) {
  const { title, onContentChange } = props;
  console.log(title);

  const [richEditor, setRichEditor] = useState(
    EditorState.push(
      EditorState.createEmpty(),
      convertFromHTML(title ? title : "Mô tả khảo sát của bạn ...")
    )
  );

  const onChange = (richEditor) => {
    if (onContentChange)
      onContentChange(convertToHTML(richEditor.getCurrentContent()));
    setRichEditor(richEditor);
  };

  return (
    <div>
      {/* questions */}
      <div style={{ marginBottom: "2em", fontSize: "16px" }}>
        <Editor
          editorState={richEditor}
          onChange={onChange}
          plugins={plugins}
        />
        <InlineToolbar />
      </div>
    </div>
  );
}

export default CustomTitle;
