import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import EndGameModal from "./components/EndGameModal";
import { useState } from "react";
import styled from "styled-components";
const App = () => {
  const [timerOn, setTimerOn] = useState(true);

  const pauseTimer = () => {
    setTimerOn(false);
  };

  const resumeTimer = () => {
    setTimerOn(true);
  };

  return (
    <StyledApp>
      <Header timerOn={timerOn} />
      <Game onTimerPause={pauseTimer} onTimerResume={resumeTimer} />
      <EndGameModal />
      <Footer />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  position: relative;
  height: 100%;
`;

export default App;
