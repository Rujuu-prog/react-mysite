import React from "react";
import styled from "styled-components";

import { FooterOnly } from "./FooterOnly";
import { HeaderOnly } from "./HeaderOnly";

type Props = {
  children?: React.ReactNode;
};

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <SContainer>
      <HeaderOnly />
      <SMainContainer>{children}</SMainContainer>

      <FooterOnly />
    </SContainer>
  );
};

const SContainer = styled.div`
  //   display: flex;
  //   flex-flow: column;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  // padding-bottom: 60px;
`;

const SMainContainer = styled.div`
  padding-top: 50px;
  background-color: #f5f5f5;
  min-height: 90vh;
`;
