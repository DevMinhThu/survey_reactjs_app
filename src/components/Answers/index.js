import { Checkbox } from "antd";
// import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import React, { Component } from "react";
import "./editorAnswerStyles.css";

// const inlineToolbarPlugin = createInlineToolbarPlugin();
// const { InlineToolbar } = inlineToolbarPlugin;
// const plugins = [inlineToolbarPlugin];
const answer = "Đáp án ... ";

export default class Answers extends Component {
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
        <div style={{ marginBottom: "2em" }}>
          <div style={{ display: "flex" }}>
            <Checkbox style={{ marginRight: "10px" }} />
            <Editor
              editorState={this.state.editorAnswer}
              onChange={this.onChangeAnswer}
              // plugins={plugins}
              ref={(element) => {
                this.editor = element;
              }}
            />
            {/* <InlineToolbar /> */}
            <input type="submit" value="+" className="styleAddAns" />
          </div>
        </div>
      </div>
    );
  }
}
