import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";

import "./Monaco.scss";

// https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background

class Monaco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "// type your code...",
      width: "0",
      height: "0",
      editor: null
    };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.saveCode = this.saveCode.bind(this);
  }
  editorDidMount = (editor, monaco) => {
    this.setState({ editor: editor });
    console.log("editorDidMount", editor);
    console.log("editorDidMount", monaco);
    editor.focus();
    // editor.layout();
    editor.setSelection({
      endColumn: 100,
      endLineNumber: 1,
      startColumn: 1,
      startLineNumber: 1
    });
  };
  onChange = (newValue, e) => {
    // console.log("onChange", newValue, e);
    this.setState({ code: newValue });
    this.props.saveCode(this.state.code);
  };
  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  handleResize = () => {
    this.state.editor.layout({
      width: document.getElementById("monaco").offsetWidth,
      height: document.getElementById("monaco").offsetHeight
    });
  };

  componentDidMount() {
    // this.updateWindowDimensions();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    // window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: true

      // automaticLayout: false
    };
    return (
      <div className="Monaco" id="monaco">
        <MonacoEditor
          {...this.props}
          // height={"100%"}
          // width={"100%"}
          // height={this.state.height - 64}
          // width={this.state.width / 2 - 170}
          // language="javascript"
          value={code}
          theme="vs-dark"
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default Monaco;
