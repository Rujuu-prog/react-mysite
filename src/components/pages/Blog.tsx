import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import { BlogType } from "../../types/type";
import { BlogBody } from "../organism/BlogBody";

const apiUrl = process.env.REACT_APP_DEV_API_URL;

export const Blog:React.FC = () => {
    const [blogs, setblogs] = useState<Array<BlogType>>([]);
    //djangoのurlをenvから取得
    useEffect(() => {
        const onClickFetchData = () => {
            axios.get<Array<BlogType>>(`http://localhost:8000/api/blog/`, {
                headers: {
                    "Content-Type": "application/json",
                },}).then((res) => {
                console.log(res.data);
                setblogs(res.data);
            });
        };
        onClickFetchData();
    }, [])
    return(
        <SMainContainer>
            {blogs.map((blog: any) => 
                <BlogBody key={blog.id} img={blog.img} text={blog.text} title={blog.title}/>
            )}
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