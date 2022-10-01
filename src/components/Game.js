import React from "react";
import styled from "styled-components";
import CharacterModal from "./CharacterModal";
import { useState } from "react";

const Game = () => {
  const [openModal, setOpenModal] = useState(false);
  const [topCord, setTopCord] = useState(0);
  const [leftCord, setLeftCord] = useState(0);
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
    if (e.target.parentElement.parentElement.id === "modal") {
      return;
    } else {
      const modal = document.querySelector("#modal");

      let newLeft =
        window.innerWidth - e.pageX < modal.offsetWidth
          ? e.pageX - modal.offsetWidth
          : e.pageX;
      modal.style.left = newLeft + "px";

      let newTop =
        window.innerHeight - e.pageY < modal.offsetHeight
          ? e.pageY - modal.offsetHeight
          : e.pageY;

      openModal ? setOpenModal(false) : setOpenModal(true);
      setTopCord(newTop);
      setLeftCord(newLeft);
    }
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
        leftCord={leftCord}
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
