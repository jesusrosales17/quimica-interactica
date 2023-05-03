import React, { useEffect } from "react";
import styled from "styled-components";

export const MemoriaElement = ({
  element,
  setElementsOfGame,
  elementsOfGame,
  cardsSelected,
  setCardsSelected,
}) => {
  const { idElement, data, isSelected, foundPair } = element;
  const { type, name, id, letter, atomicWeight } = data[0];
  let color;
  switch (type) {
    case "metales alcalinos":
      color = "#FFC591";
      break;

    case "alcalinoterréos":
      color = "#FFDF91";
      break;

    case "otros metales":
      color = "#FFF991";
      break;

    case "metales de transición":
      color = "#ecff8b";
      break;

    case "lantánidos":
      color = "#dff36f";
      break;

    case "actínidos":
      color = "#B8FF91";
      break;

    case "metaloides":
      color = "#91FF9E";
      break;

    case "no metales":
      color = "#AB91FF";
      break;

    case "halógenos":
      color = "#F991FF";
      break;

    case "gases nobles":
      color = "#91DFFF";
      break;
    default:
      break;
  }

  const onSelectedCard = () => {
    if(!foundPair) {
      const newState = elementsOfGame.map((element) => {
        if (element.idElement === idElement) {
          return {
            ...element,
            isSelected: true,
          };
        } else {
          return element;
        }
      });
  
      setElementsOfGame(newState);
  
      setCardsSelected([...cardsSelected, element]);
    }
  };

  useEffect(() => {
    if (cardsSelected.length > 1) {
      if (cardsSelected[0].data[0].id !== cardsSelected[1].data[0].id) {
        const newState = elementsOfGame.map((element) => {
          if (element.idElement === cardsSelected[0].idElement) {
            return {
              ...element,
              isSelected: false,
            };
          } 
          if (element.idElement === cardsSelected[1].idElement) {
            return {
              ...element,
              isSelected: false,
            };
          } 
            return element;
          
        });
        setTimeout(() => {
          setElementsOfGame(newState);
          setCardsSelected([]);
        }, 1000);
      }  else {
        const newState = elementsOfGame.map((element) => {
          if (element.idElement === cardsSelected[0].idElement) {
            return {
              ...element,
              foundPair: true,
            };
          } 
          if (element.idElement === cardsSelected[1].idElement) {
            return {
              ...element,
              foundPair: true,
            };
          } 
            return element;
          
        });
        setElementsOfGame(newState);
      }
      setCardsSelected([]);
    } 
  }, [cardsSelected]);

  return (
    <>
      <Container
        onClick={onSelectedCard}
        className={`${isSelected || foundPair ? "selected" : ""} `}
      >
        <div className="back f-flex justify-content-center align-items-center">
          <p className="text-center">?</p>
        </div>
        <Element
          color={color}
          className="col-3 d-flex flex-column justify-content-between"
        >
          <div className="d-flex justify-content-between align-items-center">
            <p className="fs-6">{atomicWeight}</p>
            <p className="fs-4 fw-bold">
              <small>{id}</small>
            </p>
          </div>
          <p className="fs-1 text-center  fw-bold lh-1">{letter}</p>
          <p className="name fs-6">{name}</p>
        </Element>
      </Container>
    </>
  );
};
const Container = styled.div`
  position: relative;
  transform-style: preserve-3d;
  cursor: pointer;

  /* :hover {
    transform: scale(1.03);
    cursor: pointer;
    transition: transform 0.2s ease;
  } */

  &.selected {
    cursor: default;
    transform: rotateY(180deg);
    transition: transform 0.3s ease;
  }
  transition: transform 0.3s ease;

  .back {
    /* backface-visibility: hidden; */
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #363636;
    color: #fff;
    font-size: 4rem;
    font-weight: 900;
  }
`;

const Element = styled.div`
  transform: rotateY(180deg);
  z-index: 10;
  width: 100%;
  /* max-width: 68px; */
  height: 120px;
  background-color: ${(props) => props.color};
  font-size: 13px;
  padding: 0px 3px;
  border: 2px solid #000;
  backface-visibility: hidden;

  p {
    box-sizing: border-box;
    margin: 0;
  }
`;
