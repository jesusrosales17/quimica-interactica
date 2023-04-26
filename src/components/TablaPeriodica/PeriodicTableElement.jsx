import { useEffect, useState } from "react";
import styled from "styled-components";
import useFilter from "../../hooks/useFilter";

const PeriodicTableElement = ({
  element,
  isHeader = false,
  setElementSelected,
  isDescription = false,
  filter,
  isFilter,
}) => {
  const { name, id, letter, atomicWeight, type } = element;

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
      color = "#ecff8bf8";
      break;

    case "lantánidos":
      color = "#dff36fc5";
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

  if (isFilter) {
    const elements = [
      [1, 3, 11, 19, 37, 55, 87],
      [0, 4, 12, 20, 38, 56, 88],
      [0, 0, 0, 21, 39, 71, 103],
      [0, 0, 0, 22, 40, 72, 104],
      [0, 0, 0, 23, 41, 73, 105],
      [0, 0, 0, 24, 42, 74, 106],
      [0, 0, 0, 25, 43, 75, 107],
      [0, 0, 0, 26, 44, 76, 108],
      [0, 0, 0, 27, 45, 77, 109],
      [0, 0, 0, 28, 46, 78, 110],
      [0, 0, 0, 29, 47, 79, 111],
      [0, 0, 0, 30, 48, 80, 112],
      [0, 5, 13, 31, 49, 81, 113],
      [0, 6, 14, 32, 50, 82, 114],
      [0, 7, 15, 33, 51, 83, 115],
      [0, 8, 16, 34, 52, 84, 116],
      [0, 9, 17, 35, 53, 85, 117],
      [2, 10, 18, 36, 54, 86, 118],
    ];

    if (filter > 0 && filter < 19) {
      if (!elements[filter - 1].includes(id)) {
        color = "#ffffff";
      }
    } else if (filter > 18 && filter < 26) {
      let temp = [];
      for (let i = 0; i < 18; i++) {
        temp = [...temp, elements[i][filter - 19]];
      }
      if (!temp.includes(id)) {
        color = "#ffffff";
      }
    } else {
      let tipo;
      switch (filter) {
        case 26:
          tipo = "metales alcalinos";
          break;
        case 27:
          tipo = "alcalinoterréos";
          break;
        case 28:
          tipo = "otros metales";
          break;
        case 29:
          tipo = "metales de transición";
          break;
        case 30:
          tipo = "lantánidos";
          break;
        case 31:
          tipo = "actínidos";
          break;
        case 32:
          tipo = "metaloides";
          break;
        case 33:
          tipo = "no metales";
          break;
        case 34:
          tipo = "halógenos";
          break;
        case 35:
          tipo = "gases nobles";
      }

      if(tipo !== type) {
        color = "#fff";
      }
    }
  } else {
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
        color = "#ecff8bf8";
        break;

      case "lantánidos":
        color = "#dff36fc5";
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
  }


  return (
    <Container
      color={color}
      className={`${isHeader ? "header" : ""} element`}
      data-bs-toggle="modal"
      data-bs-target="#modalInformationElement"
      onClick={() => {
        !isDescription && setElementSelected(element);
      }}
      id={id}
    >
      <div className="d-flex justify-content-between align-items-center">
        <p className={`${isDescription ? "fs-5" : ""}`}>{atomicWeight}</p>
        <p className={`${isDescription ? "fs-4" : "fs-6"} fw-bold`}>
          <small>{id}</small>
        </p>
      </div>
      <p
        className={`${
          isDescription ? "fs-1 mt-3 mb-3" : "fs-4"
        } text-center  fw-bold lh-1`}
      >
        {letter}
      </p>
      <p className={`name ${isDescription ? "fs-5" : "small"} `}>{name}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 68px;
  height: 68px;
  background-color: ${(props) => props.color};
  font-size: 13px;
  padding: 0px 3px;
  border: 2px solid #000;
  transition: background-color 0.3s ease-in-out;
  :hover {
    transform: scale(1.03);
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  p {
    box-sizing: border-box;
    margin: 0;
  }

  &.header {
    &:nth-of-type(2) {
      grid-column: 2/3;
    }
    &:nth-of-type(3) {
      grid-column: 19/20;
    }
    &:nth-of-type(6) {
      grid-column: 14/15;
    }
    &:nth-of-type(14) {
      grid-column: 14/15;
    }
  }
`;

export default PeriodicTableElement;
