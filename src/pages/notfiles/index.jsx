import { FiAlertCircle } from "react-icons/fi";
import { NotfilesStyle } from "./style";
const Notfiles = () => {
    return (
        <NotfilesStyle>
        <div className="inner">
            <i><FiAlertCircle /></i>
            <h2>페이지를 찾을 수 없습니다.</h2>
        </div>
        </NotfilesStyle>
    );
};

export default Notfiles;