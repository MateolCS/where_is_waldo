import React from "react";
import styled from "styled-components";

const CharacterModal = ({ isOpen, topCord, rightCord }) => {
  return (
    <StyledCharacterModal
      isOpen={isOpen}
      topCord={topCord}
      rightCord={rightCord}
    >
      <ModalContent>
        <ModalContentItem>Waldo</ModalContentItem>
        <ModalContentItem>WizzardBarry</ModalContentItem>
      </ModalContent>
    </StyledCharacterModal>
  );
};

const StyledCharacterModal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: ${({ topCord }) => topCord}px;
  right: ${({ rightCord }) => rightCord}px;
`;

const ModalContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContentItem = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export default CharacterModal;
