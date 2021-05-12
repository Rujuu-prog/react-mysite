import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.svg'

export const Top:React.FC = () => {
    return(
        <SMainContainer>
            <SContents>
            <p>aaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaab</p>
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
`;

const SContents = styled.div`
    width: 50%;
`;

const SImgContainer = styled.div`
    width: 50%;
    
`;

const SImg = styled.img`
    height: 90vh;
    width: 100%;
    object-fit:cover;
`;




