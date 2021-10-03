import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ProductsType } from "../../types/type";
import { Card } from "../atoms/card/Card";

export const ProductsBody: React.FC<ProductsType> = (props) => {
  const { id, img, text, title } = props;
  const path = `/product/${id}`;
  return (
    <SContainer>
      <SLink to={path}>
        <Card>
          <SH>{title}</SH>
          <SImg src={img} />
          <SP>{text}</SP>
        </Card>
      </SLink>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 40px 40px 20px 40px;
  width: 296px;
  height: 100%;
`;

const SH = styled.h1`
  margin: 0 0 15px 0;
`;

const SImg = styled.img`
  width: 256px;
  height: 144px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const SP = styled.p`
  height: 45px;
  margin: 0;
  color: #333;
`;

const SLink = styled(Link)`
  margin: 0 8px;
  text-decoration: none;
`;
