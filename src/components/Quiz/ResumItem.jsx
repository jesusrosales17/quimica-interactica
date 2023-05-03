import React, { useState } from "react";
import { ResumResp } from "./ResumResp";
import { useEffect } from "react";
import styled from "styled-components";

export const ResumItem = ({ element }) => {
  const [isResponsed, setIsResponsed] = useState(false);

  const { data } = element;
  const { question, resps } = data;

  useEffect(() => {
    const getRespondidas = () => {
      for (let i = 0; i < data.resps.length; i++) {
        if (data.resps[i].isSelected) {
          setIsResponsed(true);
          break;
        }
      }
    };

    getRespondidas();
  }, []);


  return (
    <Container className={`col border rounded  mt-4  ${!isResponsed ? "disabled" : ""}`}>
      <h5 className="p-2 text-center">{question}</h5>
      <hr />

      <div className="p-2">
        {resps.map((resp) => (
          <ResumResp key={resp.id} data={resp} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
box-shadow: 0px 0px 4px #0c0c0c2b;
    &.disabled {
        opacity: .4;
        cursor: no-drop;
    }
`;