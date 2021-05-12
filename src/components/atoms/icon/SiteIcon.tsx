import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconStyle = {
    padding:"2",
    fontsize:"50"
}

export const SiteIcon:React.FC = () => {
    return(<FontAwesomeIcon style={IconStyle} icon={faCircleNotch}></FontAwesomeIcon>);
}