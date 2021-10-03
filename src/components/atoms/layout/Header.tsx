import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }) => {
  return <SHeader>{children}</SHeader>;
};

const SHeader = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;

  background-color: black;
  color: #fff;
  padding: 16px 24px;
  //   margin-bottom: 20px;
`;
