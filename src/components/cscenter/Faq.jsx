import { Link } from "react-router-dom";
import { TabBarStyle } from "../about/style";
import { FaqStyle } from "./style";

const Faq = () => {
    return (
        <FaqStyle>
            <TabBarStyle className="tabBar">
                <li className="on" >
                    <Link to="/cscenter/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/cscenter/contact">문의하기</Link>
                </li>
            </TabBarStyle>
            <div className="inner">
                <h2>자주 하는 질문</h2>
                <em>FAQ</em>
            </div>
        </FaqStyle>
    );
};

export default Faq;