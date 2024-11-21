import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
    
      <footer className="row mt-4 ">
        <p className="text-center">
          Derechos reservados &copy; Jesus Rc.
       
        </p>
        

      </footer>
    </>
  );
};

const Span = styled.span`
    &:hover {cursor: pointer;}
`;

export default Footer;
