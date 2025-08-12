import { Link } from "react-router-dom";
import { ContactStyle } from "./style";
import { TabBarStyle } from "../about/style";

const Contact = () => {
    return (
        <ContactStyle>
                  <TabBarStyle className="tabBar">
                    <li >
                        <Link to="/cscenter/faq">FAQ</Link>        
                    </li>
                    <li className="on">
                        <Link to="/cscenter/contact">문의하기</Link>
                    </li>
                  </TabBarStyle>
            <div className="inner">
                <h2>1:1문의하기</h2>
                <em>궁금하신 점을 남겨 주시면,<br/>
                영업일 2일내에 고객님의 이메일로 답변드리겠습니다.</em>
            </div>
        </ContactStyle>
    );
};

export default Contact;