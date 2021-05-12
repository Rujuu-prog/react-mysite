import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Header } from "../atoms/layout/Header";
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { IconList } from "../molecules/IconList";

type Props = {
    children?: React.ReactNode;
};

export const HeaderOnly: React.FC<Props> = ({children}) => {
    return (
    <>
        <Header>
            <PrimaryButton>自己理念</PrimaryButton>
            <PrimaryButton>メッセージ</PrimaryButton>
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
`;
// const SLink = styled(Link)`
//     margin: 0 8px;
// `;