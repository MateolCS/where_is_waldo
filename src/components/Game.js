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
    setTopCord(e.screenY - 122);
    if (e.screenX < window.screen.width / 2) {
      setRightCord(e.screenX);
    } else {
      setRightCord(-e.screenX);
    }

    openModal ? setOpenModal(false) : setOpenModal(true);

    //https://stackoverflow.com/questions/51809099/positioning-div-left-right-or-top-bottom-of-a-mouse-click-with-css
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
