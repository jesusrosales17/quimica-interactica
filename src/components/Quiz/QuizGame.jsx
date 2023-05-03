import React, { useState } from "react";
import { Question } from "./Question";
import styled from "styled-components";
import { Temporizador } from "./Temporizador";
import { Resum } from "./Resum";

export const QuizGame = ({
  gameState,
  setGameState,
  number,
  setNumber,
  isStart,
}) => {
  //    console.log(number)

  return (
    <Container className="mt-4 container-xxl">
      {number < 10 ? (
        <div>
          {isStart && (
            <>
              <Temporizador setNumber={setNumber} number={number} />
              <Question
                quiz={gameState[number]}
                setGameState={setGameState}
                gameState={gameState}
                setNumber={setNumber}
              />
            </>
          )}
        </div>
      ) : (
        <Resum gameState={gameState} />
      )}
    </Container>
  );
};

const Container = styled.div`
  min-height: 60vh;
`;
