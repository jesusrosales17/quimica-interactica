import React, { useState } from "react";
import PeriodicTableElement from "./PeriodicTableElement";
import styled from "styled-components";
import Button from "./Button";
import Nomenclatura from "./Nomenclatura";
import { Link } from "react-router-dom";

const PeriodicTable = ({ atomicElements, setElementSelected }) => {
  const array1 = new Array(18);
  for (let i = 1; i <= 18; i++) {
    array1[i] = i;
  }
  const array2 = new Array(7);
  for (let i = 1; i <= 7; i++) {
    array2[i] = i;
  }
  const [filter, setFilter] = useState(null);
  const [isFilter, setIsFilter] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <Link to="/" className="btn btn-outline-primary">Regresar</Link>
        {filter && (
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setFilter(null);
              setIsFilter(false);
            }}
          >
            Restablecer
          </button>
        )}
      </div>
      <Row>
        <Container className={`row mt-5  header`} cols={19}>
          {array1.map((i) => (
            <Button
              type={"grupo"}
              setIsFilter={setIsFilter}
              setFilter={setFilter}
              number={i}
              key={i}
              filter={filter}
            />
          ))}
          <Nomenclatura
            setIsFilter={setIsFilter}
            setFilter={setFilter}
            filter={filter}
            isFilter={isFilter}
          />
          {atomicElements[0].map((element) => (
            <PeriodicTableElement
              setElementSelected={setElementSelected}
              key={element.id}
              element={element}
              isHeader={true}
              filter={filter}
              isFilter={isFilter}
            />
          ))}

          {array2.map((i) => (
            <Button
              type={"periodo"}
              setIsFilter={setIsFilter}
              setFilter={setFilter}
              number={i}
              key={i}
              filter={filter}
            />
          ))}
        </Container>

        <Container className="row mt-3" cols={14}>
          {atomicElements[1].map((element) => (
            <PeriodicTableElement
              key={element.id}
              element={element}
              filter={filter}
              isFilter={isFilter}
              setElementSelected={setElementSelected}
            />
          ))}
        </Container>
      </Row>
    </>
  );
};
const Row = styled.div` 
overflow-x: auto;
`;
const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);

  width: ${(props) => (props.cols == 14 ? "75%" : "100%")};
  max-width: 100%;
  margin: auto;
  gap: 0.2rem;

  &.header {
    grid-template-rows: repeat(10px, 1fr);

    .filas {
      grid-column: 1/2;
      grid-row: 2 / 8;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .group {
      display: inline-block;
      height: auto;

      &:nth-of-type(1) {
        grid-column: 1/3;
      }
      &:nth-of-type(2) {
        grid-column: 3/4;
        grid-row: 2/3;
      }
      &:nth-of-type(3) {
        grid-column: 4/5;
        grid-row: 4/5;
      }
      &:nth-of-type(4) {
        grid-column: 5/6;
        grid-row: 4/5;
      }
      &:nth-of-type(5) {
        grid-column: 6/7;
        grid-row: 4/5;
      }
      &:nth-of-type(6) {
        grid-column: 7/8;
        grid-row: 4/5;
      }
      &:nth-of-type(7) {
        grid-column: 8/9;
        grid-row: 4/5;
      }
      &:nth-of-type(8) {
        grid-column: 9/10;
        grid-row: 4/5;
      }
      &:nth-of-type(9) {
        grid-column: 10/11;
        grid-row: 4/5;
      }
      &:nth-of-type(10) {
        grid-column: 11/12;
        grid-row: 4/5;
      }
      &:nth-of-type(11) {
        grid-column: 12/13;
        grid-row: 4/5;
      }
      &:nth-of-type(12) {
        grid-column: 13/14;
        grid-row: 4/5;
      }
      &:nth-of-type(13) {
        grid-column: 14/15;
        grid-row: 2/3;
      }
      &:nth-of-type(14) {
        grid-column: 15/16;
        grid-row: 2/3;
      }
      &:nth-of-type(15) {
        grid-column: 16/17;
        grid-row: 2/3;
      }
      &:nth-of-type(16) {
        grid-column: 17/18;
        grid-row: 2/3;
      }
      &:nth-of-type(17) {
        grid-column: 18/19;
        grid-row: 2/3;
      }
      &:nth-of-type(18) {
        grid-column: 19/20;
        grid-row: 1/2;
      }
      &:nth-of-type(19) {
        grid-column: 1/2;
        grid-row: 2/3;
        margin: auto;
      }
      &:nth-of-type(20) {
        grid-column: 1/2;
        grid-row: 3/4;
        margin: auto;
      }
      &:nth-of-type(21) {
        grid-column: 1/2;
        grid-row: 4/5;
        margin: auto;
      }
      &:nth-of-type(22) {
        grid-column: 1/2;
        grid-row: 5/6;
        margin: auto;
      }
      &:nth-of-type(23) {
        grid-column: 1/2;
        grid-row: 6/7;
        margin: auto;
      }
      &:nth-of-type(24) {
        grid-column: 1/2;
        grid-row: 7/8;
        margin: auto;
      }
      &:nth-of-type(25) {
        grid-column: 1/2;
        grid-row: 8/9;
        margin: auto;
      }
    }
  }
`;

export default PeriodicTable;
