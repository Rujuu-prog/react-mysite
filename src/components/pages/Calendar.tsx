import React from "react";
import styled from "styled-components";
import { HeaderCell } from "../molecules/table/HeaderCell";
import { CalendarData } from "../organism/table/CalendarData";



export const Calendar:React.FC = () => {
    return(
        <SMainContainer>
            <STable>
                <HeaderCell headers={
                    [
                        {
                            "id": 1,
                            "text": "時限"
                        },
                        {
                            "id": 2,
                            "text": "月"
                        },
                        {
                            "id": 3,
                            "text": "火"
                        },
                        {
                            "id": 4,
                            "text": "水"
                        },
                        {
                            "id": 5,
                            "text": "木"
                        },
                        {
                            "id": 6,
                            "text": "金"
                        }
                    ]
                }/>
                <CalendarData dataList={
                    [
                        {
                            "id": 1,
                            "data": [
                                {
                                    "id": 1,
                                    "datum": "１限目"
                                },
                                {
                                    "id": 2,
                                    "datum": "国語"
                                },
                                {
                                    "id": 3,
                                    "datum": "数学"
                                },
                                {
                                    "id": 4,
                                    "datum": "理科"
                                },
                                {
                                    "id": 5,
                                    "datum": "社会"
                                },
                                {
                                    "id": 6,
                                    "datum": "国語"
                                },
                            ]
                        },
                        {
                            "id": 2,
                            "data": [
                                {
                                    "id": 1,
                                    "datum": "２限目"
                                },
                                {
                                    "id": 2,
                                    "datum": "国語"
                                },
                                {
                                    "id": 3,
                                    "datum": "数学"
                                },
                                {
                                    "id": 4,
                                    "datum": "理科"
                                },
                                {
                                    "id": 5,
                                    "datum": "社会"
                                },
                                {
                                    "id": 6,
                                    "datum": "代数学"
                                },
                            ]
                        },
                        {
                            "id": 3,
                            "data": [
                                {
                                    "id": 1,
                                    "datum": "３限目"
                                },
                                {
                                    "id": 2,
                                    "datum": "科学"
                                },
                                {
                                    "id": 3,
                                    "datum": "数学"
                                },
                                {
                                    "id": 4,
                                    "datum": "電磁気学"
                                },
                                {
                                    "id": 5,
                                    "datum": "道徳"
                                },
                                {
                                    "id": 6,
                                    "datum": "国語"
                                },
                            ]
                        },
                    ]
                }/>
            </STable>
        </SMainContainer>
        
    );
};

const SMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    height: 90vh;
    // h1 {
    //     color: #282828;
    // }
`;

const STable = styled.table`
    border: solid 1px #999;
    border-collapse: collapse
`;