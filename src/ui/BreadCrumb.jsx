import { BreadCrumbStyle } from "./style";
import { TfiAngleRight } from "react-icons/tfi";

const BreadCrumb = ({text1 = 'text', text2='text', text3='text', color1, color2, color3}) => {
    return (
        <BreadCrumbStyle color1={color1} color2={color2} color3={color3}>
            <span style={{color:color1}}>{text1}</span>
            <i><TfiAngleRight />
            </i>
            <span style={{color:color2}}>{text2}</span>
            <i><TfiAngleRight />
            </i>
            <span style={{color:color3}}>{text3}</span>
        </BreadCrumbStyle>
    );
};

export default BreadCrumb;