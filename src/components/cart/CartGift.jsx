const CartGift = () => {
    return (
        <div className="gift-right">
            <h4>
                선물 포장 서비스
                <input type="checkbox" name="" id="" />
            </h4>
            <img src="/images/cart/cart_gift.jpg" alt="" />
            <p>프로방스 스타일의 기프트를 경험하실 수 있도록 포장 물품을 함께 동봉해드립니다.</p>
            <strong>선물 메시지 추가하기</strong>
            <textarea
                name="gift-message"
                rows="5"
                cols="50"
                placeholder="소중한 이에게 감사을 마음을 전해보세요."
            ></textarea>
        </div>
    );
};

export default CartGift;
