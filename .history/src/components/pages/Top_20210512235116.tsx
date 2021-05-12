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
    flex-direction: row;
    justify-content: space-around;
`;

const SImg = styled.img`
    height: 90vh;
    width: 100%;
`;




