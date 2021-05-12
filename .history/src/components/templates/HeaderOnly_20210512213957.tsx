import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Header } from "../atoms/layout/Header";
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { IconList } from "../molecules/IconList";
import { SiteIcon } from "../atoms/icon/SiteIcon";

type Props = {
    children?: React.ReactNode;
};

export const HeaderOnly: React.FC<Props> = ({children}) => {
    return (
    <>
        <Header>
            <SiteIcon/>
            <SecondaryButton>自己理念</SecondaryButton>
            <SecondaryButton>メッセージ</SecondaryButton>
            <IconList/>
        </Header>
        {children}
    </>
    );
};


// const SLink = styled(Link)`
//     margin: 0 8px;
// `;