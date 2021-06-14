<<<<<<< HEAD
import React from "react";
import styled from "styled-components";


type Props = {
    children?: React.ReactNode;
};

export const TableHeader:React.FC<Props> = ({children}) => {

    return <STh>{children}</STh>;
};

const STh = styled.th`
    border: solid 1px #999;
`;