import { convertFromHTML, convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import Editor from "draft-js-plugins-editor";
import React, { useState } from "react";
import "./editorRichTextStyles.css";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

function RichEditor(props) {
  const { content, onContentChange, editable } = props;
  console.log(content);

  const [richEditor, setRichEditor] = useState(
    EditorState.push(
      EditorState.createEmpty(),
      convertFromHTML(content ? content : "Hello Survey")
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
          fontWeight: "500",
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

export default RichEditor;

// import { convertFromHTML, convertToHTML } from "draft-convert";
// import { EditorState } from "draft-js";
// import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
// import "draft-js-inline-toolbar-plugin/lib/plugin.css";
// import Editor, {createToolbarPlugin} from "draft-js-plugins-editor";
// import React, { useState, useEffect, Component } from "react";
// import "./editorRichTextStyles.css";

// class RichEditor extends Component {
//   constructor(props) {
//     super(props);
//     const inlineToolbarPlugin = createToolbarPlugin()//createInlineToolbarPlugin();
//     this.PluginComponents = {
//       Toolbar: inlineToolbarPlugin.InlineToolbar
//     };
//     this.plugins = [inlineToolbarPlugin];

//     this.state = {
//       // Tool: () => {
//       //   return <div></div>;
//       // },
//       // plugins: [],
//       editorState: EditorState.push(
//         EditorState.createEmpty(),
//         convertFromHTML(this.props.content ? this.props.content : "Hello")
//       ),
//     };
//   }

//   // componentDidMount() {
//   //   const inlineToolbarPlugin = createInlineToolbarPlugin();
//   //   const { InlineToolbar } = inlineToolbarPlugin;
//   //   this.setState({
//   //     Tool: InlineToolbar,
//   //     plugins: [inlineToolbarPlugin],
//   //   });
//     // setTool(InlineToolbar)
//     // setPlugins([inlineToolbarPlugin]);
//  // }

//   // console.log(props);
//   // const { content, onContentChange, editable } = props;
//   // console.log(content);
//   // function defaultToolbar() {
//   //   return ()=>{return null};
//   // }
//   // const [Tool, setTool] = useState(defaultToolbar);
//   // const [plugins, setPlugins] = useState([])

//   // useEffect(() => {
//   //   const inlineToolbarPlugin = createInlineToolbarPlugin();
//   //   const { InlineToolbar } = inlineToolbarPlugin;
//   //   console.log('InlineToolbar:\n')
//   //   console.log(InlineToolbar);
//   //   setTool(InlineToolbar)
//   //   setPlugins([inlineToolbarPlugin]);
//   // }, [])

//   // const [editorState, setEditorState] = useState(
//   //   EditorState.push(
//   //     EditorState.createEmpty(),
//   //     convertFromHTML(content ? content : "Hello")
//   //   )
//   // );

//   onChange = (editorState) => {
//     if (this.props.onContentChange)
//       this.props.onContentChange(
//         convertToHTML(editorState.getCurrentContent())
//       );
//     this.setState({
//       editorState,
//     });
//     // setEditorState(editorState);
//   };
//   // console.log('Tool:\n')
//   // console.log(Tool)

//   render() {
//     const { Toolbar } = this.PluginComponents;
//     console.log(Toolbar);
//     return (
//       <div>
//         {/* questions */}
//         <div
//           style={{
//             marginBottom: "5px",
//             fontSize: "16px",
//             fontWeight: "500",
//           }}
//         >
//           <Editor
//             editorState={this.state.editorState}
//             onChange={this.onChange.bind(this)}
//             plugins={this.state.plugins}
//           />

//           <Toolbar/>
//         </div>
//       </div>
//     );
//   }
// }

// export default RichEditor;
