import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import React, { useState } from "react";

const inlineToolbarPlugin = createInlineToolbarPlugin();

const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [inlineToolbarPlugin];
const content = "Khảo sát là gì ?";

function CustomContent({ editor }) {
  const [editorContent, setEditorContent] = useState(
    createEditorStateWithText(content)
  );

  const onChangeContent = (editorContent) => {
    setEditorContent(editorContent);
  };
  return (
    <div>
      {/* questions */}
      <div
        style={{
          marginBottom: "2em",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        <Editor
          editorState={editorContent}
          onChange={onChangeContent}
          plugins={plugins}
          ref={(element) => {
            editor = element;
          }}
        />
        <InlineToolbar />
      </div>
    </div>
  );
}

export default CustomContent;
