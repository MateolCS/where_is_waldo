import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import EndGameModal from "./components/EndGameModal";
import { useState } from "react";
import styled from "styled-components";
const App = () => {
  const [timerOn, setTimerOn] = useState(true);
  const [playerResult, setPlayerResult] = useState("");

  const pauseTimer = () => {
    setTimerOn(false);
  };

  const resumeTimer = () => {
    setTimerOn(true);
  };

  const setPlayerResultTime = (time) => {
    setPlayerResult(time);
  };

  return (
    <StyledApp>
      <Header timerOn={timerOn} onGameStop={setPlayerResultTime} />
      <Game onTimerPause={pauseTimer} onTimerResume={resumeTimer} />
      {playerResult !== "" && <EndGameModal gameTime={playerResult} />}
      <Footer />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  position: relative;
  height: 100%;
`;

export default App;
