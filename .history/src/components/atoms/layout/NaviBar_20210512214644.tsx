import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Header } from "../atoms/layout/Header";
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { IconList } from "../molecules/IconList";

type Props = {
    children?: React.ReactNode;
};

export const NaviBar: React.FC<Props> = ({children}) => {
    return (
    <>
        <Header>
            <SecondaryButton>自己理念</SecondaryButton>
            <SecondaryButton>メッセージ</SecondaryButton>
            <IconList/>
        </Header>
        {children}
    </>
    );
};


const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 16px 24px;
`;
