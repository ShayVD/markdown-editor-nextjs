/*
Create a basic markdown editor in Next.js with the following features:
- Use React hooks
- Create state for markdown with the default text "## markdown preview"
- A text area where users can write markdown
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, italic, lists, etc.
- Use React markdown npm package
- The markdown text and resulting HTML should be saved in the component's state in real time
*/

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled, { ThemeProvider } from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import Toolbar from "../components/Toolbar";

const lightTheme = {
  background: "#f5f5f5",
  text: "#333",
  toolbarBackground: "#f5f5f5",
  toolbarButtonBackground: "transparent",
  toolbarButtonColor: "#333",
  separatorColor: "#333",
};

const darkTheme = {
  background: "#333",
  text: "#f5f5f5",
  toolbarBackground: "#333",
  toolbarButtonBackground: "transparent",
  toolbarButtonColor: "#f5f5f5",
  separatorColor: "#f5f5f5",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.toolbarBackground};
  color: ${(props) => props.theme.text};
  padding: 1rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const ThemeButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.toolbarButtonBackground};
  color: ${(props) => props.theme.toolbarButtonColor};
  cursor: pointer;
  font-size: 1.2rem;
`;

const EditorContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Editor = styled.textarea`
  flex: 1;
  font-size: 1.2rem;
  padding: 1rem;
  border: none;
  outline: none;
  resize: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Separator = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.separatorColor};
`;

const PreviewContainer = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Preview = styled(ReactMarkdown)`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("## Markdown Preview");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleBoldClick = () => {
    setMarkdown(`${markdown}**bold text**`);
  };

  const handleItalicClick = () => {
    setMarkdown(`${markdown}_italic text_`);
  };

  const handleLinkClick = () => {
    setMarkdown(`${markdown}[link text](https://example.com)`);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Header>
          <Title>Markdown Editor</Title>
          <ThemeButton onClick={handleThemeToggle}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeButton>
        </Header>
        <Toolbar
          onBoldClick={handleBoldClick}
          onItalicClick={handleItalicClick}
          onLinkClick={handleLinkClick}
        />
        <EditorContainer>
          <Editor value={markdown} onChange={handleChange} />
          <Separator />
          <PreviewContainer>
            <Preview>{markdown}</Preview>
          </PreviewContainer>
        </EditorContainer>
      </Container>
    </ThemeProvider>
  );
};

export default MarkdownEditor;
