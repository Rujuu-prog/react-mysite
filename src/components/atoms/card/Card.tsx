import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

export const Card: React.FC = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  // width: 100%;
  // height: 100%;
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 26px 16px 16px 16px;
  margin: 0;
`;
