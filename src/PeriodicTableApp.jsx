import { useEffect, useState } from "react";
import Header from "./template/Header";
import PeriodicTable from "./components/TablaPeriodica/PeriodicTable";
import useFetch from "./hooks/useFetch.js";
import Modal from "./components/TablaPeriodica/Modal";
import Footer from "./template/Footer";
import styled from "styled-components";
const PeriodicTableApp = () => {
  const { atomicElements } = useFetch();
  const [elementSelected, setElementSelected] = useState({});

  return (
    <div className="container-xxl">
      <Header />
      <Main className="main">
        <section>
          {atomicElements.length !== 0 && (
            <PeriodicTable
              atomicElements={atomicElements}
              setElementSelected={setElementSelected}
            />
          )}
          <Modal elementSelected={elementSelected} />
        </section>
      </Main>

      <Footer />
    </div>
  );
};

const Main = styled.main`
  overflow: auto;
`;

export default PeriodicTableApp;
