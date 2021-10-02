import React from "react";
import styled from "styled-components";

import { ProductType } from "../../types/type";
import { Card } from "../atoms/card/Card";

export const ProductBody: React.FC<Omit<ProductType, "id">> = (props) => {
  const { img, text, title } = props;
  return (
    <SContainer>
      <Card>
        <h1>{title}</h1>
        <img height={150} width={150} src={img} />
        <p>{text}</p>
      </Card>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 40px 40px 20px 40px;
  width: 50%;
  // height: 40%;
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
`;
