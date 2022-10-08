import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const EndGameModal = ({ gameTime }) => {
  const [playerName, setPlayerName] = useState("");
  const [isPlayerNameSet, setIsPlayerNameSet] = useState(false);
  const [playersInfo, setPlayersInfo] = useState([]);

  const playerDataRef = collection(db, "player_stats");

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const data = await getDocs(playerDataRef);
    const players = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    players.sort((playerA, playerB) =>
      playerA.player_time.localeCompare(playerB.player_time)
    );
    setPlayersInfo(players);
  };

  const addPlayerResult = async (e) => {
    e.preventDefault();
    const playerData = {
      player_name: playerName,
      player_time: gameTime,
    };
    await addDoc(playerDataRef, playerData);
    setIsPlayerNameSet(true);
  };

  return (
    <StyledEndGameModal>
      <Container>
        <EndGameTitle>
          {isPlayerNameSet ? "Leaderboard" : "Enter your name"}
        </EndGameTitle>
        {isPlayerNameSet === false && (
          <EndGameForm>
            <FormRow>
              <FormLabel>Player Name</FormLabel>
              <FormInput
                type={"text"}
                value={playerName}
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
              />
            </FormRow>
            <SubmitButton onClick={addPlayerResult}>
              Submit your name
            </SubmitButton>
          </EndGameForm>
        )}
        {isPlayerNameSet && (
          <ScoreTable>
            <tbody>
              <tr>
                <th>Player name</th>
                <th>Time</th>
              </tr>
              {playersInfo.map((player) => (
                <tr key={player.player_name}>
                  <td>{player.player_name}</td>
                  <td>{player.player_time}</td>
                </tr>
              ))}
            </tbody>
          </ScoreTable>
        )}
      </Container>
    </StyledEndGameModal>
  );
};

const StyledEndGameModal = styled.div`
  background-color: #0f4c5c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  border-radius: 10px;
  min-width: 400px;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const EndGameTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #e36414;
  text-align: center;
`;

const EndGameForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem;
  background-color: #9a031e;
  border: 2px solid #5f0f40;
  border-radius: 10px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: #fff;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  color: #5f0f40;
  border: 1px solid #cb4721;
  border-radius: 10px;
  background-color: #f58220;
`;

const ScoreTable = styled.table`
  width: 100%;
  text-align: center;
  th {
    font-size: 1.4rem;
    color: #fff;
  }

  td {
    font-size: 1.2rem;
    color: #fff;
  }
`;

export default EndGameModal;
