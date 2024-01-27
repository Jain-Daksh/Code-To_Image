"use client";
import React, { useEffect } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

//languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

// //themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";

import { getExtension, initialCode } from "@/utils/utilities";

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

const CodeEditor = ({
  language,
  theme,
  icon,
  background,
  currentPadding,
}: CodeEditorProps) => {

  const [width, setWidth] = React.useState(1000);
  const [height, setHeight] = React.useState<number | null>(500);
  const [title, setTitle] = React.useState("App");
  const [code, setCode] = React.useState(initialCode);

  const [extension, setExtension] = React.useState(".js");

  const handleResize = (evt: any, direction: any, ref: { style: { height: any; }; }, pos: any) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };
  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Resizable minHeight={400} minWidth={400} maxHeight={1000} maxWidth={1000}
      defaultSize={{
        width: width,
        height: height || 500,
      }}
      onResize={handleResize}
      className="resize-container relative"
      style={{
        background: background,
      }}>
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
        mode={language?.toLowerCase()}
        theme={theme?.toLowerCase()}
        editorProps={{ $blockScrolling: true }}
      />
    </Resizable>
  )
}

export default CodeEditor