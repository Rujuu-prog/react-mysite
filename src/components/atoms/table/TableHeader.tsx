import styled from "styled-components";


export const TableHeader = (props:any) => {
    const { children } = props;
    return <STh>{children}</STh>;
};

const STh = styled.th`
    color: red;
`;