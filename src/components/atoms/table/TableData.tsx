import React from "react";
import styled from "styled-components";

import { HeaderType } from "../../../types/type";

type Props = {
    children?: React.ReactNode;
};

export const TableData:React.FC<Props> = ({children}) => {
    return <STd>{children}</STd>;
};

const STd = styled.td`
    color: black;
    border: solid 1px #999;
`;