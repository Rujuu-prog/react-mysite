import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconStyle = {
    padding:"2",
    fontsize:"50"
}

export const Instagram:React.FC = () => {
    return(<FontAwesomeIcon style={IconStyle} icon={faInstagram}></FontAwesomeIcon>);
}