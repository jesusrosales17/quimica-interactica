import { Children } from "react";
import styled from "styled-components";

const Button = ({type, number, setFilter, setIsFilter, filter}) => {
  const handleFilter = () => {
    (type == "grupo") ? setFilter(number) :  setFilter(18 + number);
    setIsFilter(true);
  }


  return (
    <Btn className={`btn ${type == "grupo" ? filter === number ? "btn-secondary" : "" : filter - 18 == number ? "btn-secondary" : ""} group text-center`} onClick={handleFilter}>{number}</Btn>
  )
}

const Btn = styled.button`
  height: 3rem;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;


export default Button