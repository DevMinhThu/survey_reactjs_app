import { convertFromHTML, convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import Editor from "draft-js-plugins-editor";
import React, { useState } from "react";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

function EditorNameSurvey(props) {
  const { nameSurvey, onContentChange } = props;
  console.log(nameSurvey);

  const [richEditor, setRichEditor] = useState(
    EditorState.push(
      EditorState.createEmpty(),
      convertFromHTML(nameSurvey ? nameSurvey : "Tên khảo sát")
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
      <div
        style={{
          marginBottom: "5px",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
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

export default EditorNameSurvey;
