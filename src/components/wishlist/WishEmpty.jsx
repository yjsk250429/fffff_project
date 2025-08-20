import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { WishEmptyStyle } from './style';

const WishEmpty = () => {
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`/product/body`);
    };
    return (
        <WishEmptyStyle>
            <div className="inner">
                <h2>위시리스트가 비어있습니다.</h2>
                <em>마음에 드는 제품을 담아보세요</em>
                <p onClick={onGo}>
                    <Button text="쇼핑하러 가기" bgColor="#000" textColor="#fff" />
                </p>
            </div>
        </WishEmptyStyle>
    );
};

export default WishEmpty;
