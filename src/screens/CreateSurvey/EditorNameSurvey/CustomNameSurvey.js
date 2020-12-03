import React, { useState } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const nameSurvey = "Nhập tên khảo sát …";

function CustomNameSurvey(editor) {
  const [editorNameSurvey, setEditorNameSurvey] = useState(
    createEditorStateWithText(nameSurvey)
  );

  const onChangeNameSurvey = (editorNameSurvey) => {
    setEditorNameSurvey(editorNameSurvey);
  };

  return (
    <div>
      {/* sub */}
      <div style={{ marginBottom: "2em", fontSize: "16px" }}>
        <Editor
          editorState={editorNameSurvey}
          onChange={onChangeNameSurvey}
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

export default CustomNameSurvey;
