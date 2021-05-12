import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.svg'

export const Philosophy:React.FC = () => {
    return(
        <SMainContainer>
            <h1>Philosophy</h1>
            <p>「ITを通じて、社会の発展を加速させるのが私の人生の目的です。」</p>
        </SMainContainer>
        
    );
};

const SMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 1;
    background-color: #f5f5f5;
    height: 90vh;
    h1 {
        color: #282828;
    }
`;