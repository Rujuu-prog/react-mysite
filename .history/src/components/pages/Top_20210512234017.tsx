import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.svg'

export const Top:React.FC = () => {
    return(
        <SMainContainer>
            <p>aaaaaaaaaaaaaaaa</p>
            <SImg src={me} alt='me'/>
        </SMainContainer>
    );
};

const SMainContainer = styled.div`
    display: flex;
    
`;

const SImg = styled.img`
    height: 100vh;
    width: 100%;
`;




