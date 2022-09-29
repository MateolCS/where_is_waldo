import React from "react";
import styled from "styled-components";
import CharacterModal from "./CharacterModal";
import { useState } from "react";

const Game = () => {
  const [openModal, setOpenModal] = useState(false);
  const [topCord, setTopCord] = useState(0);
  const [rightCord, setRightCord] = useState(0);
  const [characters, setCharacters] = useState([
    {
      name: "Waldo",
      isFound: false,
    },
    {
      name: "WizzardBarry",
      isFound: false,
    },
    {
      name: "Odlaw",
      isFound: false,
    },
  ]);

  const getCoordinates = (e) => {
    let rect = e.target.getBoundingClientRect();
    setTopCord(e.clientY - rect.left);
    setRightCord(e.clientX - rect.top);
    openModal ? setOpenModal(false) : setOpenModal(true);
  };

  const handleCharacterClick = (inCharacter) => {
    setCharacters(
      characters.map((character) =>
        character.name === inCharacter.name
          ? { ...character, isFound: true }
          : character
      )
    );
  };

  return (
    <StyledGame
      onClick={(e) => {
        getCoordinates(e);
      }}
    >
      <CharacterModal
        onItemClick={handleCharacterClick}
        characters={characters}
        isOpen={openModal}
        topCord={topCord}
        rightCord={rightCord}
      />
    </StyledGame>
  );
};

const StyledGame = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export default Game;
