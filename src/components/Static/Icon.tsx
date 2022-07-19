import { FontAwesomeIcon, Props } from "@fortawesome/react-native-fontawesome";
import React from "react";
import icons from "../../assets/icons";
type Props = {
    size?: number;
    color?: string;
    name: string;
}
const Icon: React.FC<Props> = ({size, name, color}: Props)=>{
    return(
        <FontAwesomeIcon icon={icons[name]} size={size} color={color} />
    )
}

export default Icon;