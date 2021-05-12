import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NONAME } from "dns";

const IconStyle = {
    padding:"2",
    fontsize:"50",
    textdecoration: "none",
}

export const Github:React.FC = () => {
    return(<a href='https://github.com/Rujuu-prog'><FontAwesomeIcon style={IconStyle} icon={faGithub}></FontAwesomeIcon></a>);
}