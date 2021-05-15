import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.svg';

import Lottie from "react-lottie";
import animationData from "../atoms/img/data.json";



export const Top:React.FC = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
    return(
        <SMainContainer>
            
            <SContents>
                <div className="ani"><Lottie options={defaultOptions} height={500} width={500} /></div>
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
    .ani {
        position: relative;
    }
    .ani:before {
        content: "Rujuu";
        position: absolute;
        top: 190px;
        left: 190px;
        font-size: 50px;
        font-weight: 600;
    }
    .ani:after {
        content: "ポートフォリオ";
        position: absolute;
        top: 260px;
        left: 150px;
        color: #282828;
        font-size: 30px;
        font-weight: 500;
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






