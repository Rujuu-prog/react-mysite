import React from "react";
import styled from "styled-components";

import { CalendarDataType } from "../../../types/type";
import { DataCell } from "../../molecules/table/DataCell";


type Props = {
    children?: React.ReactNode;
    dataList: Array<CalendarDataType>;
};

export const CalendarData:React.FC<Props> = ({children, dataList}) => {
    return(
        <>
            {dataList.map((dataElem:CalendarDataType) => <DataCell key={dataElem.id} datum={dataElem.data} />)}
        </>
    );
};

const SMainContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
    // background-color: #f5f5f5;
    // height: 90vh;
    // h1 {
    //     color: #282828;
    // }
`;