import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import { BlogType } from "../../types/type";

const apiUrl = process.env.REACT_APP_DEV_API_URL;

export const Blog:React.FC = () => {
    const [blogs, setblogs] = useState<Array<BlogType>>();
    //djangoのurlをenvから取得
    const onClickFetchData = () => {
        axios.get<Array<BlogType>>(`http://localhost:8000/api/blog/`, {
            headers: {
                "Content-Type": "application/json",
            },}).then((res) => {
            console.log(res.data);
            // setblogs(res.data);
        });
    };
    return(
        <SMainContainer>
            <h1>Blog</h1>
            <p>aaaa</p>
            <p>aabbb</p>
            <button onClick={onClickFetchData}>get</button>
            <p>{blogs}</p>
        </SMainContainer>
        
    );
};

const SMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5f5f5;
    height: 90vh;
    h1 {
        color: #282828;
    }
`;