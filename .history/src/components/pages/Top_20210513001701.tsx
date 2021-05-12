import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.svg'

export const Top:React.FC = () => {
    return(
        <SMainContainer>
            <SContents>
                <h1>Rujuu</h1>
                <h2>ポートフォリオ</h2>
            </SContents>
            <SImgContainer>
                <SImg src={me} alt='me'/>
            </SImgContainer>
        </SMainContainer>
    );
};

const SMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 1;
    background-color: #f5f5f5;
`;

const SContents = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const SImgContainer = styled.div`
    width: 50%;
    
`;

const SImg = styled.img`
    height: 90vh;
    width: 100%;
    object-fit:cover;
`;




