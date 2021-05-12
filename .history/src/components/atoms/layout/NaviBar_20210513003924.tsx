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
            <li><SLink to="/"><SecondaryButton>自己理念</SecondaryButton></SLink></li>
            <Slist><SLink to="/philosophy"><SecondaryButton>メッセージ</SecondaryButton></SLink></Slist>
            <li><IconList/></li>
        </SNavi>
        {children}
    </>
    );
};


const SNavi = styled.ul`
    display: flex;
    // justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    background-color: black;
    list-style: none;
    color: #fff;
    text-align: center;
`;

const Slist = styled.li`
    margin-right: auto;
`;

const SLink = styled(Link)`
    margin: 0 8px;
`;