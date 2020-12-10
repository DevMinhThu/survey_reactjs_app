import { convertFromHTML, convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import Editor from "draft-js-plugins-editor";
import React, { useState } from "react";
import "./editorRichTextStyles.css";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

function RichEditor(props) {
  console.log(props);
  const { content, onContentChange, editable } = props;
  console.log(content);

  // NOTE: gan doan text vao content
  if (content === undefined) {
    content = "Hello";
  }

  const [editorQue, setEditorQue] = useState(
    EditorState.push(EditorState.createEmpty(), convertFromHTML(content))
  );

  const onChange = (editorQue) => {
    if (onContentChange)
      onContentChange(convertToHTML(editorQue.getCurrentContent()));
    setEditorQue(editorQue);
  };

  return (
    <div>
      {/* questions */}
      <div
        style={{
          marginBottom: "5px",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        <Editor editorState={editorQue} onChange={onChange} plugins={plugins} />
        <InlineToolbar />
      </div>
    </div>
  );
}

export default RichEditor;
