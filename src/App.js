import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import EndGameModal from "./components/EndGameModal";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import firebaseFirestore from "./firebase/firebaseConfig";
const App = () => {
  const [timerOn, setTimerOn] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(firebaseFirestore, "player_stats");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
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
