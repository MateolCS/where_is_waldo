import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const CharacterModal = ({
  isOpen,
  topCord,
  rightCord,
  characters,
  onItemClick,
}) => {
  useEffect(() => {}, [isOpen]);

  return (
    <StyledCharacterModal
      isOpen={isOpen}
      topCord={topCord}
      rightCord={rightCord}
    >
      <ModalContent>
        {characters.map((character) => {
          return (
            <ModalContentItem
              key={character.name}
              onClick={() => {
                onItemClick(character);
              }}
            >
              {character.name}
            </ModalContentItem>
          );
        })}
      </ModalContent>
    </StyledCharacterModal>
  );
};

const StyledCharacterModal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: ${({ topCord }) => topCord}px;
  right: ${({ rightCord }) => rightCord}px;
  border: 2px solid black;
  padding: 10px;
  border-radius: 5px;
  background-color: #2d3142;
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
  padding: 5px;
  color: #dfe0e0;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    color: #ef8354;
  }
`;

export default CharacterModal;
