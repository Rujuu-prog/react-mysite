<<<<<<< HEAD
import React from "react";
import styled from "styled-components";


type Props = {
    children?: React.ReactNode;
};

export const TableHeader:React.FC<Props> = ({children}) => {
=======
import styled from "styled-components";


export const TableHeader = (props:any) => {
    const { children } = props;
>>>>>>> 2f129aec9b6f82b4435b3fe5c6ebd36a26a8b762
    return <STh>{children}</STh>;
};

const STh = styled.th`
    color: red;
<<<<<<< HEAD
    border: solid 1px #999;
=======
>>>>>>> 2f129aec9b6f82b4435b3fe5c6ebd36a26a8b762
`;