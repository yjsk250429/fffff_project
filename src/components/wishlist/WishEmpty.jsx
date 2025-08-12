import { WishEmptyStyle } from './style';

const WishEmpty = () => {
    return (
        <WishEmptyStyle>
            <div className="inner">
                <h2>위시리스트가 비어있습니다.</h2>
                <em>마음에 드는 제품을 담아보세요</em>
                <p>
                    <button>쇼핑하러 가기</button>
                </p>
            </div>
        </WishEmptyStyle>
    );
};

export default WishEmpty;
