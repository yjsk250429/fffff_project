import { useParams } from 'react-router-dom';
import Pagination from '../../components/pagination';
import ProductBanner from '../../components/product/banner/ProductBanner';
import Latest from '../../components/product/latest/Latest';
import { ProductStyle } from './style';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductInput from '../../components/product/productlist/ProductInput';
import ProductList from '../../components/product/productList/ProductList';

const Product = () => {
    const { category } = useParams();
    const [activeTab, setActiveTab] = useState('ALL');
    const { pageData } = useSelector((state) => state.pagination);

    const tabsByCategory = {
        hand: ['ALL', '핸드크림', '핸드&네일케어', '솝', '핸드워시'],
        hair: [
            'ALL',
            '컨디셔너',
            '오일&에센스',
            '로션',
            '스크럽',
            '세럼',
            '샴푸',
            '마스크/트리트먼트',
            'Gift&Set',
        ],
        body: [
            'ALL',
            '바스&샤워젤',
            '로션&크림',
            '솝',
            '오일',
            '스크럽',
            '미스트',
            '마스크/트리트먼트',
            'Gift&Set',
        ],
        skin: [
            'ALL',
            '수분&영양 크림',
            '세럼&오일',
            '클렌저',
            '토너/에센스',
            '미스트',
            '아이/넥 케어',
            '립 케어',
            'Gift&Set',
        ],
        fragrance: ['ALL', '여성용 향수', '남성용 향수', '홈 프래그런스', '퍼퓸/미스트'],
        refill: ['ALL', '핸드', '헤어', '바디', '스킨', '홈&프래그런스'],
    };

    const currentTabs = tabsByCategory[category] || [];

    useEffect(() => {
        setActiveTab('ALL');
    }, [category]);

    return (
        <ProductStyle>
            <ProductBanner />
            <Latest category={category} />
            <div className="inner">
                <ul className="tabs">
                    {currentTabs.map((tab) => (
                        <li
                            key={tab}
                            className={activeTab === tab ? 'on' : ''}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                <div className="sort">
                    <label htmlFor="sort">상품 순서 정렬</label>
                    <select name="sort" id="sort">
                        <option value="">== 정렬 ==</option>
                        <option value="best">인기 상품 순</option>
                        <option value="new">신제품 순</option>
                        <option value="low">낮은 가격 순</option>
                        <option value="high">높은 가격 순</option>
                    </select>
                </div>
                <ProductInput />
                <ProductList
                    key={`${category}:${activeTab}`}
                    category={category}
                    activeTab={activeTab}
                />
                {pageData.length > 0 && <Pagination />}
            </div>
        </ProductStyle>
    );
};

export default Product;
