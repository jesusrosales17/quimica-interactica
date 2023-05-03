import { useEffect, useState } from "react";
import PeriodicTable from "../components/TablaPeriodica/PeriodicTable";
import useFetch from "../hooks/useFetch.js";
import Modal from "../components/TablaPeriodica/Modal";

export const PeriodicTablePage = () => {
  const { atomicElements } = useFetch();
  const [elementSelected, setElementSelected] = useState({});

  return (
    <>
      {atomicElements.length !== 0 && (
        <PeriodicTable
          atomicElements={atomicElements}
          setElementSelected={setElementSelected}
        />
      )}
      <Modal elementSelected={elementSelected} />
    </>
  );
};

