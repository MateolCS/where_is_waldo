import React from "react";
import styled from "styled-components";
import CharacterModal from "./CharacterModal";
import { useState } from "react";

const Game = () => {
  const [openMoodal, setOpenModal] = useState(false);
  const [topCord, setTopCord] = useState(0);
  const [rightCord, setRightCord] = useState(0);

  return (
    <StyledGame>
      <CharacterModal
        isOpen={openMoodal}
        topCord={topCord}
        rightCord={rightCord}
      />
    </StyledGame>
  );
};

const StyledGame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default Game;
