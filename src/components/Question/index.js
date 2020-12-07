import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "./editorToolBarStyles.css";
// import Answer from "../Answers";
import { Checkbox } from "antd";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const question = "Nhập câu hỏi …";
const title = "Đáp án …";

export default class Question extends Component {
  state = {
    editorTitle: createEditorStateWithText(title),
    editorQue: createEditorStateWithText(question),
  };

  onChangeTitle = (editorTitle) => {
    this.setState({
      editorTitle,
    });
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
        <div style={{ marginBottom: "5px", fontSize: "18px" }}>
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
              <option value="text">Câu hỏi Text</option>
              <option value="selection">Câu hỏi lựa chọn</option>
            </select>
          </form>
        </div>

        {/* ANSWER */}
        {/* <Answer/> */}
        <div style={{ marginBottom: "2em" }}>
          <h3 style={{ fontWeight: "bold", display: "flex" }}>3. Answer</h3>
          <div style={{ display: "flex" }}>
            <Checkbox style={{ marginRight: "10px" }} />
            <Editor
              editorState={this.state.editorTitle}
              onChange={this.onChangeTitle}
              plugins={plugins}
              ref={(element) => {
                this.editor = element;
              }}
            />
            <InlineToolbar />
          </div>
          <div style={{ display: "flex" }}>
            <Checkbox style={{ marginRight: "10px" }} />
            <Editor
              editorState={this.state.editorTitle}
              onChange={this.onChangeTitle}
              plugins={plugins}
              ref={(element) => {
                this.editor = element;
              }}
            />
            <InlineToolbar />
          </div>
          <div style={{ display: "flex" }}>
            <Checkbox style={{ marginRight: "10px" }} />
            <Editor
              editorState={this.state.editorTitle}
              onChange={this.onChangeTitle}
              plugins={plugins}
              ref={(element) => {
                this.editor = element;
              }}
            />
            <InlineToolbar />
          </div>
          <input type="submit" value="Add answer" className="styleAddAns" />
        </div>
      </div>
    );
  }
}
