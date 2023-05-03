import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { MemoriaGame } from "../components/Memoria/MemoriaGame";
import Swal from "sweetalert2";

function selectNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const MemoriaPage = () => {
  const { atomicElements } = useFetch();

  const [elementsOfGame, setElementsOfGame] = useState([]);
  const [cardsSelected, setCardsSelected] = useState([]);
  const [isWinner, setIsWinner] = useState(false);


  useEffect(() => {
    if(atomicElements.length > 0 && elementsOfGame.length === 0 || isWinner) {
      function generateElements() {  
        const allElements = atomicElements[0].concat(atomicElements[1]);
        const numbers = [];
        while (numbers.length < 8) {
          const numero = Math.floor(Math.random() * 108) + 1;
          if (!numbers.includes(numero)) {
            numbers.push(numero);
          }
        }
  
        const elements = [];
        for(let i = 0; i < numbers.length; i++) {
          const elementAtomic = allElements.filter(element => element.id === numbers[i]);
          elements.push({
            idElement: elements.length + 1,
            data: elementAtomic,
            isSelected: false,
            foundPair: false,
          })
          elements.push({
            idElement: elements.length + 1,
            data: elementAtomic,
            isSelected: false,
            foundPair: false
          })
        }

        elements.sort(() => Math.random() - 0.5)
        setIsWinner(false)
  
        return elements;
      }
  
      setElementsOfGame(generateElements());
    }
   
  }, [atomicElements, isWinner]);

  useEffect(() => {
    if(elementsOfGame.length > 0) {
      let winner = true;

      for(let i = 0; i < elementsOfGame.length; i++) {
        if(!elementsOfGame[i].foundPair) {
          winner = false;
          break;
        }
      }

      if(winner) {
        setIsWinner(true);
        Swal.fire({
          icon: "success",
          title: "Felicidades!!",
          text: "Que gran memoria tienes!! ganaste el juego",
        });
      }
    }
  }, [elementsOfGame]);



  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <Link to="/" className="btn btn-outline-primary">
          Regresar
        </Link>

      </div>
        <MemoriaGame 
          elementsOfGame={elementsOfGame} 
          setElementsOfGame={setElementsOfGame} 
          cardsSelected={cardsSelected}
          setCardsSelected={setCardsSelected}
        />
    </>
  );
};
