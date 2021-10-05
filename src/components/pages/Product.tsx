import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

import { ProductsType } from "../../types/type";
import { ProductBody } from "../organism/ProductBody";

// type PageProps = {} & RouteComponentProps<{ id: string }>;

export const Product: React.FC = () => {
  const [product, setProducts] = useState<ProductsType>();
  const { id } = useParams<{ id: string }>();
  //djangoのurlをenvから取得
  useEffect(() => {
    const onClickFetchData = () => {
      const api_url: string =
        window.location.origin === "http://localhost:3000"
          ? "http://localhost:8000"
          : window.location.origin;

      axios
        .get<ProductsType>(api_url + `/api/blog/` + id, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
        });
    };
    onClickFetchData();
  }, []);
  return (
    <SMainContainer>
      <ProductBody
        key={product?.id}
        img={product?.img}
        title={product?.title}
        content={product?.content}
      />
    </SMainContainer>
  );
};

const SMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 83px);
  h1 {
    color: #282828;
  }
`;
