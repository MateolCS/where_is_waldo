import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
const Timer = ({ timerOn }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1000);
      }, 1000);
    }
    if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <StyledTimer>
      <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
    </StyledTimer>
  );
};

const StyledTimer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  span {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
  }
`;

export default Timer;
