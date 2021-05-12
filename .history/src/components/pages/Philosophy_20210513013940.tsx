import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.svg'

export const Philosophy:React.FC = () => {
    return(
        <SMainContainer>
            <h1>Philosophy</h1>
            <p>「ITを通じて、社会の発展を加速させる」</p>
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