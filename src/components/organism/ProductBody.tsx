import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";

import { ProductsType } from "../../types/type";

export const ProductBody: React.FC<ProductsType> = (props) => {
  const { id, img, content, title } = props;
  let html: string = "";
  if (content == undefined) {
    html = "文がありません";
  } else {
    html = content;
  }
  return (
    <SContainer>
      <SH>{title}</SH>
      <SImg src={img} />
      {/* <SP>{content}</SP> */}
      {parse(html)}
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 40px 40px 20px 40px;
  width: 660px;
  height: 100%;
  p {
    text-align: left;
  }
`;

const SH = styled.h1`
  font-size: 50px;
  margin: 0 0 15px 0;
`;

const SImg = styled.img`
  width: 640px;
  height: 360px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const SP = styled.p`
  height: 30px;
  margin: 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
  text-decoration: none;
`;
