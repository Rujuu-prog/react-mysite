import React from "react";
import styled from "styled-components";

import { PrimaryButton } from '../button/PrimaryButton'

type Props = {
    children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({children}) => {
    return (<SHeader>{children}</SHeader>);
};

const SHeader = styled.header`
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 8px 0;
`;

