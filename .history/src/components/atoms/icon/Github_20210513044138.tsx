import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";


const IconStyle = {
    padding:"2",
    fontsize:"50",
}

export const Github:React.FC = () => {
    return(<SButton href='https://github.com/Rujuu-prog'><FontAwesomeIcon style={IconStyle} icon={faGithub}></FontAwesomeIcon></SButton>);
}

const SButton = styled.a`
    text-decoration: none;
    color: #fff;
    :hover {
        color: #282828;
    }
`;