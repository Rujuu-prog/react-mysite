import React from "react";
import styled from "styled-components";

export const Message:React.FC = () => {
    return(
        <SMainContainer>
            <h1>自己紹介</h1>
        </SMainContainer>
        
    );
};

const SMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 1;
    background-color: #f5f5f5;
    height: 100vh;
    h1 {
        color: #282828;
    }
`;