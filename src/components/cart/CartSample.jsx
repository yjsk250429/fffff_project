import { useDispatch, useSelector } from 'react-redux';
import { CartSampleStyle } from './style';
import { cartActions } from '../../store/modules/cartSlice';

// 샘플 상품 목록 (고유 ID 사용, public/images/sample 경로 기준)
const sampleProducts = [
    {
        id: 1000,
        sampleImg: '/images/sample/sample1.png',
        title: '아몬드 모이스쳐라이징 샤워 오일 6ml (증정)',
    },
    {
        id: 1001,
        sampleImg: '/images/sample/sample2.png',
        title: '리바이탈라이징 포티파잉 스칼프 세럼 4ml (증정)',
    },
    {
        id: 1002,
        sampleImg: '/images/sample/sample3.png',
        title: '볼륨 & 스트렝스 샴푸 6ml (증정)',
    },
];

const CartSample = () => {
    const dispatch = useDispatch();

    // Redux store에서 장바구니 상태 가져오기
    const carts = useSelector((state) => state.cart.carts);

    // 체크된 장바구니 상품이 있는지 확인 (샘플 제외)
    const hasCheckedItems = carts.some((cart) => cart.isChecked && !cart.isSample);

    /**
     * 샘플 체크박스 클릭 핸들러
     * - 장바구니 상품이 없으면 경고
     * - 샘플이 없으면 새로 추가 (sampleImg 포함)
     * - 이미 있으면 체크/언체크 토글
     */
    const handleSampleClick = (product) => {
        if (!hasCheckedItems) {
            alert('장바구니 상품을 먼저 선택해주세요.');
            return;
        }

        const sampleId = `sample-${product.id}`;
        const exists = carts.some((c) => c.id === sampleId);

        if (!exists) {
            // 체크하면 추가
            dispatch(
                cartActions.addSampleCart({
                    ...product,
                    id: sampleId,
                    isSample: true,
                    sampleImg: product.image,
                })
            );
        } else {
            // 체크 해제하면 제거
            dispatch(cartActions.removeCart(sampleId));
        }
    };

    return (
        <CartSampleStyle>
            {/* 섹션 제목 */}
            <strong>무료 샘플 서비스 선택</strong>
            <p>데일리 보습부터 럭시타 제품까지 베스트셀러 뷰티 아이템을 만나보세요.</p>

            {/* 샘플 목록 */}
            <ul className="sample-left">
                {sampleProducts.map((product) => (
                    <li key={product.id} className={!hasCheckedItems ? 'disabled' : ''}>
                        {/* 샘플 체크박스 */}
                        <input
                            type="checkbox"
                            name={`sample-${product.id}`}
                            id={`sample-${product.id}`}
                            disabled={!hasCheckedItems} // 장바구니 상품이 없으면 비활성화
                            checked={carts.some(
                                (c) => c.isSample && c.id === `sample-${product.id}` && c.isChecked
                            )} // Redux 상태 기반
                            onChange={() => handleSampleClick(product)}
                        />
                        {/* 샘플 이미지 */}
                        <img src={product.sampleImg} alt={product.title} />
                        {/* 샘플 이름 */}
                        <p>{product.title}</p>
                    </li>
                ))}
            </ul>
        </CartSampleStyle>
    );
};

export default CartSample;
