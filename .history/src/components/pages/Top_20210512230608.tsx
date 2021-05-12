import React from "react";
import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.jpeg'

export const Top:React.FC = () => {
    return(
        <DefaultLayout>
            <p>aaaaaaaaaaaaaaaa</p>
            <img src={me} alt='me'/>
        </DefaultLayout>
    );
};





