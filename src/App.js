import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import { useState } from "react";
const App = () => {
  const [timerOn, setTimerOn] = useState(true);

  const pauseTimer = () => {
    setTimerOn(false);
  };

  const resumeTimer = () => {
    setTimerOn(true);
  };

  return (
    <>
      <Header timerOn={timerOn} />
      <Game onTimerPause={pauseTimer} onTimerResume={resumeTimer} />
      <Footer />
    </>
  );
};

export default App;
