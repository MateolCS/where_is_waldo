import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import EndGameModal from "./components/EndGameModal";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
const App = () => {
  const [timerOn, setTimerOn] = useState(true);
  const playerDataRef = collection(db, "player_stats");
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(playerDataRef);
      data.docs.map((doc) => {
        console.log({ ...doc.data(), id: doc.id });
      });
    };

    getData();
  });

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
