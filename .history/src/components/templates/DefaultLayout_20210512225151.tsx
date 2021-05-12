import React from "react";
import { FooterOnly } from "./FooterOnly";
import { HeaderOnly } from "./HeaderOnly";

type Props = {
    children?: React.ReactNode;
};

export const DefaultLayout: React.FC<Props> = ({children}) => {
    return (
    <>
        <HeaderOnly/>
        {children}
        <FooterOnly/>
    </>
    );
};