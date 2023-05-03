import styled from "styled-components";
import Img0 from "../../images/ahorcado/0.jpg";
import Img1 from "../../images/ahorcado/1.jpg";
import Img2 from "../../images/ahorcado/2.jpg";
import Img3 from "../../images/ahorcado/3.jpg";
import Img4 from "../../images/ahorcado/4.jpg";
import Img5 from "../../images/ahorcado/5.jpg";
import Img6 from "../../images/ahorcado/6.jpg";
import ShowLetters from "./ShowLetters";

const DrawMan = ({ word, correctLetters, attempts }) => {
  let img;
  switch (attempts) {
    case 0:
      img = Img0;
      break;
    case 1:
      img = Img1;
      break;
    case 2:
      img = Img2;
      break;
    case 3:
      img = Img3;
      break;
    case 4:
      img = Img4;
      break;
    case 5:
      img = Img5;
      break;
    case 6:
      img = Img6;
      break;
  }
  return (
    <div className="row container-xxl d-flex justify-content-center mt-4">
      <BlackBoard className="col-11 col-sm-10 col-xl-7 p-3 rounded">
        <div className="col-12  rounded borde">
          <img src={img} alt="Ningun intento" className="mb-2" />

          <ShowLetters word={word} correctLetters={correctLetters} />
        </div>
      </BlackBoard>
    </div>
  );
};

const BlackBoard = styled.div`
  background-color: #a77536;
  height: 50vh;

  .borde {
    background-color: #476d34;
    height: 100%;
    display: block;
    width: 100%;
  }

  img {
    height: 90%;
  }
`;

export default DrawMan;
