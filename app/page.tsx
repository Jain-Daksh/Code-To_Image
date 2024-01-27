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
      <main className=" h-[100vh] flex flex-col items-center justify-between">
        <header
          className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
         z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"
        >
          <LanguageSelector
            language={language}
            setLanguage={setLanguage}
            seActiveIcon={setActiveIcon}
          />

        </header>

        <div className="code-editor-ref mt-[14rem]" ref={editorRef}>
          <CodeEditor
            language={language}
            theme={theme}
            background={background}
            icon={activeIcon}
            currentPadding={currentPadding}
          />
        </div>

        <Footer />
      </main>

      {/* <header>
        <LanguageSelector />
      </header>
      <CodeEditor
        language={language}
        theme={theme}
        background={background}
        icon={activeIcon}
        currentPadding={currentPadding} /> */}

    </>
  );
}
