import React from "react";
import styled from "styled-components";

import { TableHeader } from "../../atoms/table/TableHeader";
import { HeaderType } from "../../../types/type";


type Props = {
    children?: React.ReactNode;
    headers: Array<HeaderType>;
};

export const HeaderCell:React.FC<Props> = ({children, headers}) => {
    return (
        <STr>
            {headers.map((header:HeaderType) => <TableHeader key={header.id} >{header.text}</TableHeader>)}
        </STr>
    );
};

const STr = styled.tr`
    
`;