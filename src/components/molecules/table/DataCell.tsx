import React from "react";
import styled from "styled-components";

import { CalendarDatumType, HeaderType } from "../../../types/type";
import { TableData } from "../../atoms/table/TableData";


type Props = {
    children?: React.ReactNode;
    datum: Array<CalendarDatumType>;
};

export const DataCell:React.FC<Props> = ({children, datum}) => {
    return (
        <STr>
            {datum.map((e:CalendarDatumType) => <TableData key={e.id} >{e.datum}</TableData>)}
        </STr>
    );
};

const STr = styled.tr`
    
`;