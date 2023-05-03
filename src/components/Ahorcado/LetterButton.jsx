import React, { useEffect, useState } from "react";

const LetterButton = ({ word, letter, setCorrectLetters, setAttempts, setIsFinal, isFinal }) => {
  const [isSelected, setIsSlected] = useState(false);
  
  useEffect(() => {
    setIsSlected(false);
  }, [isFinal])
 

  const validLetter = (e) => {
    setIsSlected(true);
    if (word.includes(letter)) {
      setCorrectLetters((letters) => [...letters, letter]);
    } else {
        setAttempts(attempts => attempts + 1);
    }
  };

  return (
    <button
      className="btn btn-outline-secondary py-1 px-4 badge-secondary"
      disabled={isSelected}
      onClick={validLetter}
    >
      {letter}
    </button>
  );
};

export default LetterButton;
