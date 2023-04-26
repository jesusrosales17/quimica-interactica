import React from "react";
import PeriodicTableElement from "./PeriodicTableElement";
import styled from "styled-components";

const Modal = ({ elementSelected }) => {
  const {
    id,
    name,
    letter,
    BoilingPoint,
    PhaseTemperaturePressure,
    atomicWeight,
    description,
    electronicConfiguration,
    meltingPoint,
    oxidationStates,
    type,
    valenceElectrons,
  } = elementSelected;
  return (
    <Container
      className="modal fade"
      id="modalInformationElement"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-3" id="exampleModalLabel">
              Información del {name}
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
              <div className="row">
                <div className="col-12 col-sm-4 col-lg-3 d-flex justify-content-center">
                  <PeriodicTableElement element={elementSelected} isDescription={true} />
                </div>
                <div className="col-12 col-sm-4 col-lg-5">
                  <p>
                    Simbolo: <span>{letter}</span>
                  </p>
                  <p>
                    Numero Atomico: <span>{id}</span>
                  </p>
                  <p>
                    Nombre: <span>{name}</span>
                  </p>
                  <p>
                    Clasificación: <span>{type}</span>
                  </p>
                  <p>
                    Punto de ebullición: <span>{BoilingPoint}</span>
                  </p>
                  <p>
                    Punto de fución: <span>{meltingPoint}</span>
                  </p>
                </div>
                <div className="col-12 col-sm-4 col-lg-4">
                  <p>
                    Peso Atomico: <span>{atomicWeight}</span>
                  </p>
                  <p>
                    Configuración Electronica:{" "}
                    <span>{electronicConfiguration}</span>
                  </p>
                  <p>
                    Numero De electrones de valencia:{" "}
                    <span>{valenceElectrons}</span>
                  </p>
                  <p>
                    Fase a temperatura y presión estándar:{" "}
                    <span>{PhaseTemperaturePressure}</span>
                  </p>
                  <p>
                    Estados de oxidación comunes: <span>{oxidationStates}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-start">
            <h4 className="">Información Extra</h4>
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .modal-dialog {
    max-width: 90vw;
  }
 
  .element {
    width: 8rem;
    height: 8rem;
    max-width: 100%;
    margin: auto;

  }
  @media (min-width: 768px) {
    
    .element {
      
      max-width: 100%;
      width: 10rem;
      height: 9rem;
      display: block;
    }
  }
`;

export default Modal;
