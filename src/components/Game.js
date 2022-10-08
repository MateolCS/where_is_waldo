import React from "react";
import styled from "styled-components";
import CharacterModal from "./CharacterModal";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import backgroundPhoto from "../imgs/imgData";

const Game = ({ onTimerPause, onTimerResume }) => {
  const characterCordsRef = collection(db, "correct_cords");

  const [openModal, setOpenModal] = useState(false);
  const [topCord, setTopCord] = useState(0);
  const [leftCord, setLeftCord] = useState(0);
  const [characters, setCharacters] = useState([
    {
      name: "Waldo",
      isFound: false,
    },
    {
      name: "Oswald",
      isFound: false,
    },
    {
      name: "Wizzard Barry",
      isFound: false,
    },
  ]);

  useEffect(() => {
    if (allCharactersFound()) {
      onTimerPause();
    }
  });

  const getCharacterCords = async (characterName) => {
    const q = query(
      characterCordsRef,
      where("character_name", "==", characterName)
    );
    const data = await getDocs(q);
    const cords = data.docs.map((doc) => ({ ...doc.data() }));
    return cords[0];
  };

  const allCharactersFound = () => {
    return characters.every((character) => character.isFound);
  };

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

  const isGuessValid = async (inCharacter) => {
    const characterData = await getCharacterCords(inCharacter.name);
    console.log(characterData);
    if (
      topCord >= characterData.x_cord.min_value &&
      topCord <= characterData.x_cord.max_value &&
      leftCord >= characterData.y_cord.min_value &&
      leftCord <= characterData.y_cord.max_value
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleCharacterClick = async (inCharacter) => {
    const isValid = await isGuessValid(inCharacter);
    console.log(topCord, "topCord");
    console.log(leftCord, "leftCord");
    console.log(isValid);
    if (isValid) {
      setCharacters(
        characters.map((character) =>
          character.name === inCharacter.name
            ? { ...character, isFound: true }
            : character
        )
      );
    }
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
  min-height: 100vh;
  position: relative;
  background-image: url(${backgroundPhoto});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Game;
