import React from "react";
import { Resps } from "./Resps";

export const Question = ({ quiz, setGameState, gameState, setNumber }) => {
  const { data } = quiz;
  const { question, resps } = data;

  const validQuestion = (info) => {
    const newState = gameState.map((element) => {
      if (element.id === quiz.id) {
        for (let i = 0; i < 4; i++) {
          if (element.data.resps[i].id === info.id) {
            element.data.resps[i].isSelected = true;
          }
        }
      }

      return element;
    });
    setGameState(newState);

    setNumber((number) => number + 1);
  };

  return (
  <>
  
    <div className="d-flex justify-content-center row container-xxl gap-5">
      <h3 className="text-center fs-1">{question}</h3>

      <div className="d-flex col-9 gap-4 flex-wrap justify-content-center mt-2">
        {resps.map((resp) => (
          <Resps info={resp} key={resp.id} validQuestion={validQuestion} />
        ))}
      </div>
    </div>
  </>
  );
};
