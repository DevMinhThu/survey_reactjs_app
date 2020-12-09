import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "./editorToolBarStyles.css";
import Answers from "../Answers";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const question = "Câu hỏi 1: ...";

export default class Question extends Component {
  state = {
    editorQue: createEditorStateWithText(question),
  };

  onChangeQue = (editorQue) => {
    this.setState({
      editorQue,
    });
  };

  render() {
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
          <Editor
            editorState={this.state.editorQue}
            onChange={this.onChangeQue}
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
          />
          <InlineToolbar />
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
            >
              <option value="selection">Câu hỏi lựa chọn</option>
              <option value="text">Câu hỏi Text</option>
            </select>
          </form>
        </div>

        {/* ANSWER */}
        <div style={{ marginBottom: "2em" }}>
          <Answers />
          <Answers />
          <Answers />
          {/* <input type="submit" value="Add answer" className="styleAddAns" /> */}
        </div>
      </div>
    );
  }
}
