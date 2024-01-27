"use client";
import React, { useEffect } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// //languages
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-html";
// import "ace-builds/src-noconflict/mode-css";
// import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/mode-typescript";

// //themes
// import "ace-builds/src-noconflict/theme-monokai";
// import "ace-builds/src-noconflict/theme-terminal";
// import "ace-builds/src-noconflict/theme-twilight";


const CodeEditor = () => {
  return (
    <Resizable minHeight={450} minWidth={510} maxHeight={1000} maxWidth={1000}>
      <AceEditor
        value="code here"
        fontSize={16}
        wrapEnabled={true}
        placeholder="enter your code here"
        showPrintMargin={true}
        highlightActiveLine={true}
        className="ace-editor-container"
        showGutter={true}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
    </Resizable>
  )
}

export default CodeEditor