import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DrawMan from "../components/Ahorcado/DrawMan";
import { ShowLetterButtons } from "../components/Ahorcado/ShowLetterButtons";
import Swal from "sweetalert2";

const words = ['QUIMICA', 'ELEMENTO', 'COMPUESTO', 'ATOMO', 'MOLECULA', 'REACCION', 'ESTADO', 'SOLIDO', 'LIQUIDO', 'GAS', 'TERMODINAMICA', 'ELECTRON', 'PROTON', 'NEUTRON', 'ENLACE', 'PERIODICA', 'TABLA', 'ORGANICA', 'INORGANICA', 'ACIDO', 'BASE', 'INDICADOR', 'CINETICA', 'EQUILIBRIO', 'CATALISIS', 'FOTOQUIMICA', 'ESPECTROSCOPIA'];

const createArrayLetters = () => {
  let letters = [];
  for (let i = 65; i <= 90; i++) {
    if (i === 78) {
      // Agregar la letra "ñ" (ASCII 209)
      letters = [...letters, String.fromCharCode(i), "Ñ"];
    } else {
      letters = [...letters, String.fromCharCode(i)];
    }
  }

  return letters;
};
function selectWord(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const AhorcadoPage = () => {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isFinal, setIsFinal] = useState(false);
  const [word, setWord] = useState("");
  const [letters, setLetters] = useState({});
  const [inicio, setInicio] = useState(false);

  useEffect(() => {
    setInicio(true);
  })

  useEffect(() => {
    setIsFinal(false);
  }, [word])



  if (attempts == 6) {
    Swal.fire({
      icon: "error",
      title: "Oops... Perdiste",
      text: "La palabra a adivinar era: " + word,
    });
    setCorrectLetters([]);
    setAttempts(0);
    setWord(words[selectWord(0, words.length - 1)]);
    setIsFinal(true);

  }

  useEffect(() => {
    setLetters(createArrayLetters());

  }, []);
  useEffect(() => {
    setWord(words[selectWord(0, words.length - 1)]);
  }, []);

  useEffect(() => {
    let sinRepetidos = [];

    if (correctLetters.length > 0) {
      word.split("").forEach((letter) => {
        if (!sinRepetidos.includes(letter)) {
          sinRepetidos = [...sinRepetidos, letter];
        }
      });

      let win = false;

      // word.split("").forEach(letter => {
      //   console.log(!correctLetters.includes(letter))
      //   if(!correctLetters.includes(letter)) {
      //     win = false;
      //     return;
      //   } else {
      //     win = true;
      //   }
      // })

      for(let i = 0; i < word.split("").length; i++) {
        if(!correctLetters.includes( word.split("")[i])) {
          win = false;
          break;
        } else {
          win = true;
        }
      }




      if (win) {
        Swal.fire("Buen Trabajo!", "Lograste adivinar la palabra!!", "success");
        setCorrectLetters([]);
        setAttempts(0);
        setWord(words[selectWord(0, words.length - 1)]);
        setIsFinal(true);
      }
    }
  }, [correctLetters]);

  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <Link to="/" className="btn btn-outline-primary">
          Regresar
        </Link>
      </div>
      <DrawMan
        word={word.split("")}
        correctLetters={correctLetters}
        attempts={attempts}
      />
      <ShowLetterButtons
        word={word.split("")}
        setCorrectLetters={setCorrectLetters}
        setAttempts={setAttempts}
        letters={letters}
        setIsFinal={setIsFinal}
        isFinal={isFinal}
      />
    </>
  );
};
