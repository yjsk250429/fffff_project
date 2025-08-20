import { useDispatch, useSelector } from 'react-redux';
import { CartSampleStyle } from './style';
import { cartActions } from '../../store/modules/cartSlice';

// 샘플 상품 목록
const sampleProducts = [
    {
        id: 1000,
        image: '/images/sample/sample1.png',
        title: '아몬드 모이스쳐라이징 샤워 오일 6ml (증정)',
    },
    {
        id: 1001,
        image: '/images/sample/sample2.png',
        title: '리바이탈라이징 포티파잉 스칼프 세럼 4ml (증정)',
    },
    { id: 1002, image: '/images/sample/sample3.png', title: '볼륨 & 스트렝스 샴푸 6ml (증정)' },
];

const CartSample = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart.carts);

    // 샘플 제외 체크된 장바구니 상품 확인
    const hasCheckedItems = carts.some((cart) => cart.isChecked && !cart.isSample);

    // 샘플 체크박스 클릭 핸들러
    const handleSampleClick = (product) => {
        if (!hasCheckedItems) {
            alert('장바구니 상품을 먼저 선택해주세요.');
            return;
        }

        const sampleId = `sample-${product.id}`;
        const exists = carts.some((c) => c.id === sampleId);

        if (!exists) {
            // 체크 → 장바구니에 1개만 추가
            dispatch(
                cartActions.addSampleCart({
                    ...product,
                    id: sampleId,
                    isSample: true,
                    quantity: 1, // 수량 고정
                    sampleImg: product.image,
                    isChecked: true,
                })
            );
        } else {
            // 체크 해제 → 장바구니에서 제거
            dispatch(cartActions.removeCart(sampleId));
        }
    };

    return (
        <CartSampleStyle>
            <strong>무료 샘플 서비스 선택</strong>
            <p>데일리 보습부터 럭시타 제품까지 베스트셀러 뷰티 아이템을 만나보세요.</p>
            <ul className="sample-left">
                {sampleProducts.map((product) => (
                    <li key={product.id} className={!hasCheckedItems ? 'disabled' : ''}>
                        <input
                            type="checkbox"
                            name={`sample-${product.id}`}
                            id={`sample-${product.id}`}
                            disabled={!hasCheckedItems}
                            checked={carts.some(
                                (c) => c.isSample && c.id === `sample-${product.id}` && c.isChecked
                            )}
                            onChange={() => handleSampleClick(product)}
                        />
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                    </li>
                ))}
            </ul>
        </CartSampleStyle>
    );
};

export default CartSample;
