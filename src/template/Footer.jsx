import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <footer className="row mt-4">
        <p className="text-center">
          Derechos reservados &copy; Tecnm Ith{" "}
          <Span
            data-bs-toggle="modal"
            data-bs-target="#informacionEquipo"
            className="fw-bold"
          >
            Integrantes...
          </Span>
        </p>

        <div
          className="modal fade"
          id="informacionEquipo"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-3" id="exampleModalLabel">
                  Información del proyecto
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body row">
                <div className="contain">
                  Este proyecto es para la clase de Quimica en la que se nos
                  dividio en equipos y se nos solicito recrear la tabla
                  periodica de una manera creativa y con la que podamos
                  interactuar.
                  <br />
                  Nuestro equipo decidio hacer la tabla con codigo, es decir
                  programarla. Ya que como nuestra carrera esta orientada a la
                  creación de sistemas vimos que esta esra una buena oportunidad
                  para mostrar las cosas que podemos hacer orientadas a nuestra
                  carrera. Para hacer la tabla utilizamos la libreria llamada
                  React.js Que es una libreria basada en el lenguaje JavaScript,
                  que despues la convertimos en una progresive web app. Para
                  poder ejecutarla como si fuera una aplicación multiplataforma.
                </div>
              </div>
              <div className="modal-footer justify-content-start">
                <h4>Integrantes del equipo:</h4>
                <ul>
                  <li>Zaid de la Cruz Cruz </li>
                  <li>Jesus Bustos Cruz </li>
                  <li>Jose Daniel Hernandez Flores </li>
                  <li>Jesus Rosales Castillo </li>
                  <li>Nancy Idalia Hernandéz Felix</li>
                  <li>Ricardo Martínez Martínez </li>
                  <li>Jeni Trejo San Roman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const Span = styled.span`
    &:hover {cursor: pointer;}
`;

export default Footer;
