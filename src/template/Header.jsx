import styled from "styled-components";
import LogoTecnm from "../images/LogoTecnm.png";
import LogoIth from "../images/logoIth.png";
import LogoSep from "../images/SEP.png";
import { useHref } from "react-router-dom";

const Header = () => {
  const ref = useHref();

  let title = "";

  switch(ref) {
    case "/": 
      title = "Aplicación de quimica interactiva";
      break;
    case "/tablaperiodica":
      title = "Tabla Periodica";
      break;
  } 

  return (
    <header className="row">
      <Container className="col d-flex align-items-center mt-3 justify-content-between">
        <img
          src={LogoTecnm}
          alt="Logo Tecnlogo Nacional De Mexico"
          width={200}
          height={90}
          className="ml-2 logoTecnm"
        />

        <h1 className="me-lg-5 text-center fs-5">{title}</h1>

        <img
          src={LogoIth}
          alt="Logo Instituto Tecnologico de Huejutla"
          width={90}
          height={80}
          className="logoIth"
        />
      </Container>
    </header>
  );
};
const Container = styled.div`
  @media (max-width: 500px) {
    .logoTecnm {
      width: 100px;
      height: auto;
    }
    .logoIth {
      width: 50px;
      height: auto;
    }
  }
  @media (min-width: 500px) {
    h1 {
      font-size: 2rem!important;
    }
  }
`;

export default Header;
