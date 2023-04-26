import React from 'react'
import styled from 'styled-components'
import Estructura from '../../images/TablaPeriodica/estructura.png';

const Nomenclatura = ({setFilter, setIsFilter, filter, isFilter}) => {
    const handleClick = (number) => {
        setIsFilter(true);
        setFilter(number);
    }
  return (
    <Container className='d-flex justify-content-between align-items-center'>
        <img src={Estructura} alt="Estructura de los elementos de la tabla periodica" />

        <div className="row">
            <div className="col-7">
                <button onClick={() => handleClick(26)} className={`btn ${isFilter ? filter == 26 ? "metalesalcalinos" : "" : "metalesalcalinos"}`}>Metales Alcalinos</button>
                <button onClick={() => handleClick(27)} className={`btn ${isFilter ? filter == 27 ? "alcalinoterréos" : "" : "alcalinoterréos"}`}>Alcalinoterréos</button>
                <button onClick={() => handleClick(28)} className={`btn ${isFilter ? filter == 28 ? "otrosmetales" : "" : "otrosmetales"}`}>Otros Metales</button>
                <button onClick={() => handleClick(29)} className={`btn ${isFilter ? filter == 29 ? "metalesdetransición" : "" : "metalesdetransición"}`}>Metales de Transición</button>
                <button onClick={() => handleClick(30)} className={`btn ${isFilter ? filter == 30 ? "lantánidos" : "" : "lantánidos"}`}>Lantánidos</button>
            </div>
            <div className="col-5">
                <button onClick={() => handleClick(31)} className={`btn ${isFilter ? filter == 31 ? "actínidos" : "" : "actínidos"}`}>Actínidos</button>
                <button onClick={() => handleClick(32)} className={`btn ${isFilter ? filter == 32 ? "metaloides" : "" : "metaloides"}`}>Metaloides</button>
                <button onClick={() => handleClick(33)} className={`btn ${isFilter ? filter == 33 ? "nometales" : "" : "nometales"}`}>No metales</button>
                <button onClick={() => handleClick(34)} className={`btn ${isFilter ? filter == 34 ? "halógenos" : "" : "halógenos"}`}>Halógenos</button>
                <button onClick={() => handleClick(35)} className={`btn ${isFilter ? filter == 35 ? "gasesnobles" : "" : "gasesnobles"}`}>Gases Nobles</button>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    grid-column: 4 / 14;
    grid-row: 1 / 5;
    height: 138px;
    width: auto;
    margin-top: 0rem;

    img {
        height: 290px;
        margin-top: -10rem;
    }

    button {
        font-size: 14px;
        margin-bottom: 5px;
        padding: 5px 10px;
        &.metalesalcalinos { background-color: #FFC591; }
        &.alcalinoterréos { background-color: #FFDF91; }
        &.otrosmetales {background-color: #FFF991; }
        &.metalesdetransición {background-color: #ECFF91;}
        &.lantánidos{background-color: #dff36fc5;}    
        &.actínidos{background-color: #B8FF91;}
        &.metaloides{background-color: #91FF9E;}
        &.nometales{background-color: #AB91FF; }
        &.halógenos{ background-color: #F991FF;}
        &.gasesnobles{ background-color: #91DFFF;}
    }
    
`;

export default Nomenclatura