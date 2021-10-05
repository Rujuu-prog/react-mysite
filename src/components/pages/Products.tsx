import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { ProductsType } from "../../types/type";
import { ProductsBody } from "../organism/ProductsBody";

const apiUrl = process.env.REACT_APP_DEV_API_URL;

export const Products: React.FC = () => {
  const [blogs, setblogs] = useState<Array<ProductsType>>([]);
  //djangoのurlをenvから取得
  useEffect(() => {
    const onClickFetchData = () => {
      const api_url: string =
        window.location.origin === "http://localhost:3000"
          ? "http://localhost:8000"
          : window.location.origin;
      axios
        .get<Array<ProductsType>>(api_url + `/api/blog/`, {
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
      {console.log(blogs)}
      {blogs.map((blog: any) => (
        <ProductsBody
          id={blog.id}
          img={blog.img}
          text={blog.text}
          title={blog.title}
          content={blog.content}
        />
      ))}
    </SMainContainer>
  );
};

const SMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  min-height: calc(100vh - 83px);
  align-content: flex-start;
  align-items: stretch;
  h1 {
    color: #282828;
  }
`;
