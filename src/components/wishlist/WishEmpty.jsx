import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { WishEmptyStyle } from './style';
import Modal from '../../ui/modal';
import { useState } from 'react';

const WishEmpty = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => {
        setOpen(true); // 모달 열기
    };
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`/product/body`);
    };
    return (
        <WishEmptyStyle>
            <div className="inner">
                <h2>위시리스트가 비어있습니다.</h2>
                <em>마음에 드는 제품을 담아보세요</em>
                <p>
                    <Button
                        onClick={onGo}
                        text="쇼핑하러 가기"
                        width="150px"
                        bgColor="#000"
                        textColor="#fff"
                    />
                </p>
            </div>
            {open && <Modal text="상품을 장바구니에 담았습니다." onClose={() => setOpen(false)} />}
        </WishEmptyStyle>
    );
};

export default WishEmpty;
