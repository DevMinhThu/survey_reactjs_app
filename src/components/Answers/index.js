import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "./editorAnswerStyles.css";
import { Checkbox } from "antd";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const answer = "Đáp án …";

export default class Answer extends Component {
  state = {
    editorAnswer: createEditorStateWithText(answer),
  };

  onChangeAnswer = (editorAnswer) => {
    this.setState({
      editorAnswer,
    });
  };

  render() {
    return (
      <div>
        {/* ANSWER */}
        <div style={{ marginBottom: "5px", fontSize: "18px" }}>
          <div style={{ display: "flex" }}>
            <Checkbox style={{ marginRight: "10px" }} />
            <Editor
              editorState={this.state.editorAnswer}
              onChange={this.onChangeAnswer}
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
              onChange={this.onChangeAnswer}
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
              onChange={this.onChangeAnswer}
              plugins={plugins}
              ref={(element) => {
                this.editor = element;
              }}
            />
            <InlineToolbar />
          </div>
        </div>
      </div>
    );
  }
}
