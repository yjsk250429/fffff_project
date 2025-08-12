import { CartSampleStyle } from './style';

const sampleProducts = [];

const CartSample = () => {
    return (
        <CartSampleStyle>
            <strong>무료 샘플 서비스 선택</strong>
            <p>데일리 보습부터 럭셔리 제품까지 록시땅의 베스트셀러 뷰티 아이템을 만나보세요.</p>
            <ul className="sample-left">
                <li>
                    <input type="checkbox" name="" id="" />
                    <img src="/images/products/item224.webp" alt="" />
                    <p>아몬드 모이스쳐라이징 샤워 오일 6ml</p>
                </li>
            </ul>
        </CartSampleStyle>
    );
};

export default CartSample;
