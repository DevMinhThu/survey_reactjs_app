import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import React, { useState } from "react";
import Answers from "../Answers";
import "./editorToolBarStyles.css";
import RichEditor from "../../components/RichEditor";

const defaultQuestion = {
  title: "Nhập câu hỏi",
  questionType: "text",
};

function Question() {
  const [editing, setEditing] = useState(false);

  const renderAnswer = () => {
    return (
      <div>
        <div
          style={{
            marginBottom: "5px",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          <RichEditor content={defaultQuestion.title} />
        </div>
        <Answers />
      </div>
    );
  };

  const renderQuestionText = () => {
    return (
      <div
        style={{
          marginBottom: "5px",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        <RichEditor content={defaultQuestion.title} />
      </div>
    );
  };

  const buttonQueSelect = (e) => {
    console.log(e.target.value);
    setEditing(!editing);
  };

  const showAnswer = () => {
    if (editing === true) {
      return renderAnswer();
    } else {
      return renderQuestionText();
    }
  };

  return (
    <div>
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
            onChange={buttonQueSelect}
          >
            <option value="text" selected>
              Câu hỏi Text
            </option>
            <option value="selection">Câu hỏi lựa chọn</option>
          </select>
        </form>
      </div>

      {/* questions */}
      {/* <div
        style={{
          marginBottom: "5px",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        <RichEditor content={defaultQuestion.title} />
      </div> */}

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
