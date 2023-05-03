import { useEffect, useState } from "react";
import LetterButton from "./LetterButton";


export const ShowLetterButtons = ({ word, setCorrectLetters, setAttempts, letters, setIsFinal, isFinal }) => {
  return (
    <div className="row container-xxl d-flex justify-content-center mt-5">
      <div className="col-11 col-sm-10 col-xl-9 d-flex justify-content-center gap-2 flex-wrap">
        {letters.length > 0 &&
          letters.map((letter, i) => (
            <LetterButton
              key={i}
              letter={letter}
              setCorrectLetters={setCorrectLetters}
              word={word}
              setAttempts={setAttempts}
              setIsFinal={setIsFinal}
              isFinal={isFinal}
            />
          ))}
      </div>
    </div>
  );
};
