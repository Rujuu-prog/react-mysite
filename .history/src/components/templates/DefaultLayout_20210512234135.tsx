import React from "react";
import styled from "styled-components";

import { FooterOnly } from "./FooterOnly";
import { HeaderOnly } from "./HeaderOnly";

type Props = {
    children?: React.ReactNode;
};

export const DefaultLayout: React.FC<Props> = ({children}) => {
    return (
    <div>
        <HeaderOnly/>
        {children}
        <FooterOnly/>
    </div>
    );
};

const SContainer = styled.div`
    position: relative;
`;