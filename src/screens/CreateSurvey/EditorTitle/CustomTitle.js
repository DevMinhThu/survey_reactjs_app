import React, { useState } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";

const inlineToolbarPlugin = createInlineToolbarPlugin();

const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [inlineToolbarPlugin];
const content = "Mô tả khảo sát của bạn ...";

function CustomTitle({ editor }) {
  const [editorSub, setEditorSub] = useState(
    createEditorStateWithText(content)
  );

  const onChangeSub = (editorSub) => {
    setEditorSub(editorSub);
  };
  return (
    <div>
      {/* questions */}
      <div style={{ marginBottom: "2em", fontSize: "16px" }}>
        <Editor
          editorState={editorSub}
          onChange={onChangeSub}
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

export default CustomTitle;
