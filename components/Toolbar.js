import React from "react";
import styled from "styled-components";

const ToolbarContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  padding: 0.5rem;
`;

const ToolbarButton = styled.button`
  margin-right: 0.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Toolbar = ({ onBoldClick, onItalicClick, onLinkClick }) => {
  return (
    <ToolbarContainer>
      <ToolbarButton onClick={onBoldClick}>Bold</ToolbarButton>
      <ToolbarButton onClick={onItalicClick}>Italic</ToolbarButton>
      <ToolbarButton onClick={onLinkClick}>Link</ToolbarButton>
    </ToolbarContainer>
  );
};

export default Toolbar;