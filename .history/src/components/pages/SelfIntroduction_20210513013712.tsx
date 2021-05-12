import React from "react";
import styled from "styled-components";

import me from '../atoms/img/me.svg'

export const SelfIntroduction:React.FC = () => {
    return(
        <SMainContainer>
            <h1>Self introduction</h1>
            <img src={me} alt="me"/>
            <h2>Rujuu</h2>
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
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-position: left top;
    }
`;