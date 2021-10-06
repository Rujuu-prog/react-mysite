import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page404: React.FC = () => {
  return (
    <SContainer>
      <SP>お探しのページが見つかりませんでした。</SP>
      <SLink to="/">&#9758; Topページ</SLink>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 83px);
`;

const SP = styled.p`
  margin: 0 0 5px 0;
`;

const SLink = styled(Link)``;
