"use client";
import CodeEditor from "@/components/CodeEditor";
import Footer from "@/components/Footer";
import React, { useState, useRef } from "react";
import { backgrounds, languages, themes } from "@/utils/utilities";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {

  const editorRef = useRef(null);

  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  return (
    <>
      <header>
        <LanguageSelector />
      </header>
      <CodeEditor
        language={language}
        theme={theme}
        background={background}
        icon={activeIcon}
        currentPadding={currentPadding} />

      <Footer />
    </>
  );
}
