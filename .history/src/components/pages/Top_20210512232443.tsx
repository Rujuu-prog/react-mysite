import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.svg'

export const Top:React.FC = () => {
    return(
        <DefaultLayout>
            <p>aaaaaaaaaaaaaaaa</p>
            <SImg src={me} alt='me'/>
        </DefaultLayout>
    );
};

const SImg = styled.img`
    display: flex;
    height: 100vh;
    width: 100%;
`;


