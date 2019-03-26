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
      height: "0"
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log("onChange", newValue, e);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount() {
    this.updateWindowDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line"
      // automaticLayout: false
    };
    return (
      <div className="Monaco">
        <MonacoEditor
          height={this.state.height + "px"}
          width={this.state.width / 2}
          language="javascript"
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
