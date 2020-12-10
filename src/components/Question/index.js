// import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
// import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
// import { EditorState } from "draft-js";
// import { convertToHTML, convertFromHTML } from "draft-convert";
import React, { useState } from "react";
import Answers from "../Answers";
import "./editorToolBarStyles.css";
import RichEditor from "../../components/RichEditor";

// const inlineToolbarPlugin = createInlineToolbarPlugin();
// const { InlineToolbar } = inlineToolbarPlugin;
// const plugins = [inlineToolbarPlugin];
const defaultQuestion = {
  title: "Noi dung cau hoi",
  questionType: "text",
};

function Question({ editor, question }) {
  // const [editorQue, setEditorQue] = useState(
  //   EditorState.push(
  //     EditorState.createEmpty(),
  //     convertFromHTML(defaultQuestion.title)
  //   )
  // );

  const [editing, setEditing] = useState(false);

  const renderAnswer = () => {
    return <Answers />;
  };

  const buttonQueSelect = (e) => {
    console.log(e.target.value);
    setEditing(true);
  };

  const showAnswer = () => {
    if (editing === true) {
      return renderAnswer();
    } else {
      return;
    }
  };

  // const onChangeQue = (editorQue) => {
  //   console.log(editorQue.getCurrentContent());
  //   console.log(convertToHTML(editorQue.getCurrentContent()));
  //   //console.log(convertToHTML)
  //   setEditorQue(editorQue);
  // };

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
        {/* <Editor
          editorState={editorQue}
          onChange={onChangeQue}
          plugins={plugins}
          ref={(element) => {
            editor = element;
          }}
        />
        <InlineToolbar /> */}
        <RichEditor content="Xin chao test"/>
      </div>

      {/* title */}
      <div style={{ marginBottom: "2em" }}>
        <form>
          <label for="type_question" style={{ marginRight: "10px" }}>
            Chọn loại câu hỏi:
          </label>
          <select
            name="type_question"
            id="type_question"
            style={{ marginRight: "10px" }}
            // onChange={handleSelect}
            // value={value}
            onChange={buttonQueSelect}
          >
            <option value="text">Câu hỏi Text</option>
            <option value="selection">Câu hỏi lựa chọn</option>
          </select>
        </form>
      </div>

      {/* ANSWER */}
      <div style={{ marginBottom: "2em" }}>
        {/* <Answers />
        <Answers />
        <Answers /> */}
        {showAnswer()}
        {/* <input type="submit" value="Add answer" className="styleAddAns" /> */}
      </div>
    </div>
  );
}

export default Question;
