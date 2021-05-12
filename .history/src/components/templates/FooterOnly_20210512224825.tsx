import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Footer } from "../atoms/layout/Footer";


export const FooterOnly: React.FC = () => {
    return (
    <>
        <Footer />
    </>
    );
};


// const SLink = styled(Link)`
//     margin: 0 8px;
// `;