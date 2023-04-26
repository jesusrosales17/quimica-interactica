import { useEffect, useState } from "react";

const useFetch = () => {
  const [atomicElements, setAtomicElements] = useState([]);

  useEffect(() => {
    const getAtomicElements = async () => {
      const response = await fetch("/db/elements.json");
      const result = await response.json();

      setAtomicElements(result);
    };

    getAtomicElements();
  }, []);

  return {atomicElements};
};

export default useFetch;
