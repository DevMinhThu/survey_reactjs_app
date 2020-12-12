import { Checkbox, Button } from "antd";
// import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import React, { useState } from "react";
import "./editorAnswerStyles.css";
import RichEditor from "../../components/RichEditor";

// const inlineToolbarPlugin = createInlineToolbarPlugin();
// const { InlineToolbar } = inlineToolbarPlugin;
// const plugins = [inlineToolbarPlugin];
const answer = "Đáp án ...";

function Answers({ editor }) {
  // const [editorAnswer, setEditorAnswer] = useState(
  //   createEditorStateWithText(answer)
  // );

  // const onChangeAnswer = (editorAnswer) => {
  //   setEditorAnswer(editorAnswer);
  // };

  return (
    <div>
      {/* ANSWER */}
      <div style={{ marginBottom: "2em" }}>
        <div className="styleRichEditor">
          {/* <Checkbox style={{ marginRight: "10px" }} /> */}
          <RichEditor className="test" content={answer} />
          {/* <Editor
            editorState={editorAnswer}
            onChange={onChangeAnswer}
            // plugins={plugins}
            ref={(element) => {
              editor = element;
            }}
          />
          <InlineToolbar /> */}
          <input type="submit" value="+" className="styleAddAns" />
          {/* <Button type="primary" size="small" color="red">+</Button> */}
        </div>
      </div>
    </div>
  );
}

export default Answers;
