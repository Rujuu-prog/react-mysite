import React from "react";
import styled from "styled-components";

import me from '../atoms/img/me.svg'

export const SelfIntroduction:React.FC = () => {
    return(
        <SMainContainer>
            <h1>Self introduction</h1>
            <img src={me} alt="me"/>
        </SMainContainer>
        
    );
};

const SMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    background-color: #f5f5f5;
    height: 100vh;
    h1 {
        color: #282828;
    }
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-position: left top;
    }
`;