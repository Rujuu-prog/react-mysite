import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { ProductType } from "../../types/type";
import { ProductBody } from "../organism/ProductBody";

const apiUrl = process.env.REACT_APP_DEV_API_URL;

export const Product: React.FC = () => {
  const [blogs, setblogs] = useState<Array<ProductType>>([]);
  //djangoのurlをenvから取得
  useEffect(() => {
    const onClickFetchData = () => {
      const api_url: string =
        window.location.origin === "http://localhost:3000"
          ? "http://localhost:8000"
          : window.location.origin;
      axios
        .get<Array<ProductType>>(api_url + `/api/blog/`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          setblogs(res.data);
        });
    };
    onClickFetchData();
  }, []);
  return (
    <SMainContainer>
      {blogs.map((blog: any) => (
        <ProductBody
          key={blog.id}
          img={blog.img}
          text={blog.text}
          title={blog.title}
        />
      ))}
    </SMainContainer>
  );
};

const SMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 90vh;
  h1 {
    color: #282828;
  }
`;