import React from "react";
import styled from "styled-components";

export const Blog:React.FC = () => {
    return(
        <SMainContainer>
            <h1>Blog</h1>
            <p>aaaa</p>
            <p>aabbb</p>
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