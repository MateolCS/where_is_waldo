import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import { useState } from "react";
const App = () => {
  const [timerOn, setTimerOn] = useState(false);

  const pauseTimer = () => {
    setTimerOn(false);
  };

  const unPauseTimer = () => {
    setTimerOn(true);
  };

  return (
    <>
      <Header timerOn={timerOn} />
      <Game onTimerPause={pauseTimer} onTimerUnPause={unPauseTimer} />
      <Footer />
    </>
  );
};

export default App;
