import React from "react";
import styled from "styled-components";

import { FooterOnly } from "./FooterOnly";
import { HeaderOnly } from "./HeaderOnly";

type Props = {
    children?: React.ReactNode;
};

export const DefaultLayout: React.FC<Props> = ({children}) => {
    return (
    <SContainer>
        <HeaderOnly/>
        {children}
        <FooterOnly/>
    </SContainer>
    );
};

const SContainer = styled.div`
    min-height: 100vh;
    position: relative;
    box-sizing: border-box;
`;