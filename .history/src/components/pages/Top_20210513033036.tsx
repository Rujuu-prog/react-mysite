import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.svg'

import Lottie from "react-lottie";
import animationData from "../atoms/img/data.json";



export const Top:React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
    return(
        <SMainContainer>
            <SContents>
                <Lottie options={defaultOptions} height={500} width={500} />
                <h1>Rujuu</h1>
                <h2>ポートフォリオ</h2>
            </SContents>
            <SImgContainer>
                <img src={me} alt='me'/>
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
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 50px;
        margin: 0 0 15px 0;
    }
    h2 {
        font-size: 30px;
        margin: 0;
    }
`;

const SImgContainer = styled.div`
    width: 50%;
    img {
        height: 90vh;
        width: 100%;
        object-fit:cover;
    }
`;






