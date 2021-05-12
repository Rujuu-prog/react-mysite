import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SecondaryButton } from "../button/SecondaryButton"
import { IconList } from "../../molecules/IconList";

type Props = {
    children?: React.ReactNode;
};

export const NaviBar: React.FC<Props> = ({children}) => {
    return (
    <>
        <SNavi>
            <li><SecondaryButton>自己理念</SecondaryButton></li>
            <li><SecondaryButton>メッセージ</SecondaryButton></li>
            <li><IconList/></li>
        </SNavi>
        {children}
    </>
    );
};


const SNavi = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0;
    background-color: black;
    list-style: none;
    color: #fff;
    text-align: center;
    padding: 16px 24px;
`;
