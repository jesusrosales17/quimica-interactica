import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { QuizGame } from "../components/Quiz/QuizGame";

export const QuizPage = () => {
  const [quizFetch, setQuizFetch] = useState([]);
  const [gameState, setGameState] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const [newGame, setNewGame] = useState(false);
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      const resp = await fetch("/db/quizz.json");
      const result = await resp.json();

      setQuizFetch(result);
    };

    getQuestions();
  }, []);

  useEffect(() => {
    if (number === 0) {
      if (quizFetch.length > 0) {
        Swal.fire({
          title: "¿Estas listo?",
          text: "El juego consta de 10 preguntas relacionadas a la materia de quimica, cuentas con 10s para responder cada pregunta. \n Adivina las mas que puedas, Suerte!!!",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Comenzar!",
          cancelButtonText: "Regresar",
        }).then((result) => {
          if (result.isConfirmed) {
            setIsStart(true);

            if (quizFetch.length > 0) {
              function generateElements() {
                const numbers = [];
                while (numbers.length < 10) {
                  const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
                  if (!numbers.includes(numero)) {
                    numbers.push(numero);
                  }
                }

                const elements = [];
                for (let i = 0; i < numbers.length; i++) {
                  const data = quizFetch.filter(
                    (element) => element.id === numbers[i]
                  );
                  elements.push({
                    id: i,
                    data: data[0],
                  });
                }

                return elements;
              }

              setGameState(generateElements());
            }
          } else {
            navigate("/");
          }
        });
      }
    }
  }, [quizFetch, number]);

  useEffect(() => {
    if (number === 10) setIsStart(false);
  }, [number]);

  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <Link to="/" className="btn btn-outline-primary">
          Regresar
        </Link>

        {number === 10 && (
          <button className="btn btn-primary" onClick={() => setNumber(0)}>
            Nuevo Juego
          </button>
        )}
      </div>

      {gameState.length > 0 && (
        <QuizGame
          isStart={isStart}
          number={number}
          setNumber={setNumber}
          gameState={gameState}
          setGameState={setGameState}
        />
      )}
    </>
  );
};
