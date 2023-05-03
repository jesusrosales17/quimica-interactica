import React, { useEffect, useState } from "react";

export const Temporizador = ({ setNumber, number }) => {
  const [contador, setContador] = useState(10);

  useEffect(() => {
    setContador(10);
  }, [number])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(contador > 0) {
        setContador(contador - 1);
      } else {
        setNumber(state => state + 1);
      }
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [contador]);

  return (
    <div className="btn btn-primary">
      00:{contador > 9 ? contador : "0" + contador}
    </div>
  );
};
