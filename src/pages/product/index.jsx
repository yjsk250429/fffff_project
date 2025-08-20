import { useParams } from 'react-router-dom';
import Pagination from '../../components/pagination';
import ProductBanner from '../../components/product/banner/ProductBanner';
import Latest from '../../components/product/latest/Latest';
import { ProductStyle } from './style';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductInput from '../../components/product/productList/ProductInput';
import ProductList from '../../components/product/productList/ProductList';
import { paginationActions } from '../../store/modules/paginationSlice';

const Product = () => {
    const { category } = useParams();
    const [activeTab, setActiveTab] = useState('ALL');
    const { pageData } = useSelector((state) => state.pagination);
    const [sort, setSort] = useState('');   
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();

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
        setSort('');     
    }, [category]);

    const getFirstPrice = (p) =>
        Array.isArray(p.option) && p.option.length > 0 && typeof p.option[0].price === 'number'
          ? p.option[0].price
          : Number.POSITIVE_INFINITY; // 가격이 없으면 가장 뒤로
      
      const getRate = (p) =>
        p?.rating && typeof p.rating.rate === 'number' ? p.rating.rate : -Infinity;
      
      const getCount = (p) =>
        p?.rating && typeof p.rating.count === 'number' ? p.rating.count : 0;
      
      /** 1) 인기상품 순 */
      const sortByBest = (products) =>
        [...products].sort((a, b) => {
          const rateDiff = getRate(b) - getRate(a);
          if (rateDiff !== 0) return rateDiff;
      
          const cntDiff = getCount(b) - getCount(a);
          if (cntDiff !== 0) return cntDiff;
      
          return (b.id ?? 0) - (a.id ?? 0);
        });
      
      /** 2) 신제품 순 */
     const sortByNew = (products) =>
        [...products].sort((a, b) => {
          const anew = !!a.isNew;
          const bnew = !!b.isNew;
          if (anew !== bnew) return bnew - anew; // true 먼저
          return (b.id ?? 0) - (a.id ?? 0);
        });
      
      /** 3) 낮은 가격 순 */
     const sortByLowPrice = (products) =>
        [...products].sort((a, b) => {
          const pa = getFirstPrice(a);
          const pb = getFirstPrice(b);
          if (pa !== pb) return pa - pb;
          return (b.id ?? 0) - (a.id ?? 0);
        });
      
      /** 4) 높은 가격 순 */
      const sortByHighPrice = (products) =>
        [...products].sort((a, b) => {
          const pa = getFirstPrice(a);
          const pb = getFirstPrice(b);
          if (pa !== pb) return pb - pa;
          return (b.id ?? 0) - (a.id ?? 0);
        });

        const filtered = useMemo(() => {
            let list = products;
          
            if (category && category !== "ALL") {
              list = list.filter((p) => p.category === category);
            }
          
            if (activeTab && activeTab !== "ALL") {
              list = list.filter((p) => p.type === activeTab);
            }
          
            return list;
          }, [products, category, activeTab]);

        const sorted = useMemo(() => {
            if (sort === 'best')  return sortByBest(filtered);
            if (sort === 'new')   return sortByNew(filtered);
            if (sort === 'low')   return sortByLowPrice(filtered);
            if (sort === 'high')  return sortByHighPrice(filtered);
            return [...filtered]; // 정렬 없음
          }, [filtered, sort]);

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
                    <select name="sort" id="sort"
                    value={sort}
                    onChange={(e) => {
                      setSort(e.target.value);
                      dispatch(paginationActions.setPage(1))
                    }}
                    >
                        <option value="">== 정렬 ==</option>
                        <option value="best">인기 상품 순</option>
                        <option value="new">신제품 순</option>
                        <option value="low">낮은 가격 순</option>
                        <option value="high">높은 가격 순</option>
                    </select>
                </div>
                <ProductInput />
                <ProductList
                    // key={`${category}:${activeTab}`}
                    // category={category}
                    // activeTab={activeTab}
                    items={sorted}
                />
                {pageData.length > 0 && <Pagination />}
            </div>
        </ProductStyle>
    );
};

export default Product;
