import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

export const Template = () => {
  return (
    <Main className="container-xxl d-flex flex-column justify-content-between">
      <Header />
        <Section>{<Outlet />}</Section>
      <Footer />
    </Main>
  );
};

const Main = styled.main`
  min-height: 100vh;
`;
const Section = styled.section`
  /* overflow: auto; */
`;
