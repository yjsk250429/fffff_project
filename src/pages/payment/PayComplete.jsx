import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { PaymentCompleteStyle } from './style';

const PayComplete = () => {
    const navigate = useNavigate();
    const onGo = () => {
        navigate('/product/skin');
    };
    return (
        <PaymentCompleteStyle>
            <h2>주문이 완료되었습니다.</h2>
            <div className="completed-info">
                <h3>
                    주문번호: <span>2020090519683953</span>
                </h3>
                <ul className="info-wrap">
                    <li>
                        <p>
                            배송지정보
                            <span>
                                010-1234-5678
                                <br />
                                홍길동
                            </span>
                        </p>
                    </li>
                    <li>
                        <p>
                            배송메모<span>빠른 배송부탁드려요</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            배송비<span>3,000원</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            입금계좌안내
                            <span>
                                은행명: 국민은행 035-12345678-456
                                <br />
                                예금주: 록시땅(주)
                                <br />
                                송금자: 본인명
                            </span>
                        </p>
                    </li>
                    <li>
                        <p>
                            입금금액<span>87,000원</span>
                        </p>
                    </li>
                </ul>
            </div>
            <p>
                <Button text="주문 상세보기" width="150px" bgColor="#fff" textColor="#000" />
                <Button
                    onClick={onGo}
                    text="쇼핑 계속하기"
                    width="150px"
                    bgColor="#000"
                    textColor="#fff"
                />
            </p>
        </PaymentCompleteStyle>
    );
};

export default PayComplete;
