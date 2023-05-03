import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TablaImg from "../images/TablaPeriodica/tabla.png";
import AhorcadoImg from "../images/TablaPeriodica/ahorcado.jpg";
import MemoriaImg from "../images/TablaPeriodica/memoria.png";
import QuizImg from "../images/TablaPeriodica/quiz.png";

export const HomePage = () => {
  return (
    <Nav className="row container-xxl gy-3  d-flex justify-content-between">
      <Link to="/tablaperiodica" className="col-sm-6 col-lg-3">
        <div className="card">
          <img src={TablaImg} className="card-img-top" alt="Tabla periodica" />

          <div className="card-body">
            <h5 className="card-title text-center">Tabla Periodica</h5>
            <p className="card-text">
              Encuentra diversa información sobre los elementos quimicos como su
              numero atomico, configuración electronica, numeros de oxidación,
              etc.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/ahorcado" className="col-sm-6 col-lg-3">
        <div className="card">
          <img
            src={AhorcadoImg}
            className="card-img-top"
            alt="Tabla periodica"
          />
          <div className="card-body">
            <h5 className="card-title text-center">El ahorcado</h5>
            <p className="card-text">
              Diviertede jugando al clasico juego del ahorcado con palabras
              relacionadas a la quimica.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/memoria" className="col-sm-6 col-lg-3">
        <div className="card">
          <img
            src={MemoriaImg}
            className="card-img-top"
            alt="Tabla periodica"
          />

          <div className="card-body">
            <h5 className="card-title text-center">Memoria</h5>
            <p className="card-text">
              Diviertede jugando a memoria con imagenes de quimica.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/quiz" className="col-sm-6 col-lg-3">
        <div className="card">
          <img src={QuizImg} className="card-img-top" alt="Tabla periodica" />

          <div className="card-body">
            <h5 className="card-title text-center">Quiz</h5>
            <p className="card-text">
              ¿Crees conocer mucho de quimica?, ponte a pruva con este quiz para
              ver de que estas echo
            </p>
          </div>
        </div>
      </Link>
    </Nav>
  );
};

const Nav = styled.nav`
  a {
    text-decoration: none;
    
  }
  .card {
    height: 100%;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 10px #0000002b;
      transition: transform .2s ease;
    }
  }
  img {
    height: calc(100% / 2.5);
  }
`;
