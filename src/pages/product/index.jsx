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
import BreadCrumb from '../../ui/BreadCrumb';
import { BreadCrumbStyle } from '../../ui/style';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import TopBtn from '../../ui/TopBtn';

const Product = () => {
    const { category } = useParams();
    const [activeTab, setActiveTab] = useState('ALL');
    const { pageData } = useSelector((state) => state.pagination);
    const [sort, setSort] = useState('');
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const [filters, setFilters] = useState({
        concernType: [], // e.g. ['데일리 케어', '수분 보습']
        texture: [], // e.g. ['크림', '오일']
        collection: [], // e.g. ['시어버터']
        price: [], // e.g. ['10k','20k','30k','40k','50k+']
        q: '', // 검색어 (원하면 사용)
    });

    const tabsByCategory = {
        hand: ['ALL', '핸드크림', '핸드&네일 케어', '솝', '핸드워시'],
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
        setFilters({ concernType: [], texture: [], collection: [], price: [], q: '' });
    }, [category]);

    const getFirstPrice = (p) =>
        Array.isArray(p.option) && p.option.length > 0 && typeof p.option[0].price === 'number'
            ? p.option[0].price
            : Number.POSITIVE_INFINITY; // 가격이 없으면 가장 뒤로

    const getRate = (p) =>
        p?.rating && typeof p.rating.rate === 'number' ? p.rating.rate : -Infinity;

    const getCount = (p) => (p?.rating && typeof p.rating.count === 'number' ? p.rating.count : 0);

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

    const filteredBase = useMemo(() => {
        let list = products;

        if (category && category !== 'ALL') {
            list = list.filter((p) => p.category === category);
        }

        if (activeTab && activeTab !== 'ALL') {
            list = list.filter((p) => p.type === activeTab);
        }

        return list;
    }, [products, category, activeTab]);

    const priceInBuckets = (price, buckets) => {
        if (!buckets || buckets.length === 0) return true;
        // buckets: ['10k','20k','30k','40k','50k+']
        return buckets.some((b) => {
            if (b === '10k') return price >= 10000 && price < 20000;
            if (b === '20k') return price >= 20000 && price < 30000;
            if (b === '30k') return price >= 30000 && price < 40000;
            if (b === '40k') return price >= 40000 && price < 50000;
            if (b === '50k+') return price >= 50000;
            return true;
        });
    };

    const matchMulti = (fieldValue, selected) => {
        if (!selected || selected.length === 0) return true; // 선택 없으면 통과
        if (fieldValue == null) return false;
        // 제품 데이터가 문자열인 경우
        if (typeof fieldValue === 'string') return selected.includes(fieldValue);
        // 배열인 경우 (교집합 있으면 통과)
        if (Array.isArray(fieldValue)) return fieldValue.some((v) => selected.includes(v));
        return false;
    };

    const filtered = useMemo(() => {
        return filteredBase.filter((p) => {
            const price = getFirstPrice(p);
            const okConcern = matchMulti(p.concernType, filters.concernType);
            const okTexture = matchMulti(p.texture, filters.texture);
            const okCollection = matchMulti(p.collection, filters.collection);
            const okPrice = priceInBuckets(price, filters.price);

            // (선택) 검색어 - 이름/설명/type 등에 적용하고 싶으면 활성화
            const q = (filters.q || '').trim().toLowerCase();
            const okSearch =
                q === ''
                    ? true
                    : [p.title, p.desc, p.type, p.collection, p.concernType]
                          .flat()
                          .filter(Boolean)
                          .join(' ')
                          .toLowerCase()
                          .includes(q);

            return okConcern && okTexture && okCollection && okPrice && okSearch;
        });
    }, [filteredBase, filters]);

    const sorted = useMemo(() => {
        if (sort === 'best') return sortByBest(filtered);
        if (sort === 'new') return sortByNew(filtered);
        if (sort === 'low') return sortByLowPrice(filtered);
        if (sort === 'high') return sortByHighPrice(filtered);
        return [...filtered]; // 정렬 없음
    }, [filtered, sort]);

    useEffect(() => {
        dispatch(paginationActions.goToPage(1));
    }, [filters, sort, dispatch]);

    const toggleFilter = (group, value) => {
        setFilters((prev) => {
            const set = new Set(prev[group]);
            if (set.has(value)) set.delete(value);
            else set.add(value);
            return { ...prev, [group]: Array.from(set) };
        });
    };

    const setSearch = (q) => setFilters((prev) => ({ ...prev, q }));

    const setPriceBucket = (value) => toggleFilter('price', value);
    const ProductBreadCrumb = styled(BreadCrumbStyle)`
        @media (max-width: 390px) {
            display: none;
        }
    `;
    return (
        <ProductStyle>
            <ProductBanner />
            <div className="inner">
                <ProductBreadCrumb
                    text1="HOME"
                    text2="SHOP"
                    text3={category.toUpperCase()}
                    color3="#000"
                />

                <Latest category={category} />

                <div className="controls">
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
                    <h4>
                        전체보기
                        <i>
                            <MdKeyboardArrowDown />
                        </i>
                    </h4>
                    <p className="sorted-length">총 {sorted.length}개</p>
                    <div className="sort">
                        <label htmlFor="sort">상품 순서 정렬</label>
                        <select
                            name="sort"
                            id="sort"
                            value={sort}
                            onChange={(e) => {
                                setSort(e.target.value);
                                dispatch(paginationActions.goToPage(1));
                            }}
                        >
                            <option value="">== 정렬 ==</option>
                            <option value="best">인기 상품 순</option>
                            <option value="new">신제품 순</option>
                            <option value="low">낮은 가격 순</option>
                            <option value="high">높은 가격 순</option>
                        </select>
                    </div>
                    <ProductInput
                        items={sorted}
                        filters={filters}
                        onToggle={toggleFilter}
                        onTogglePrice={setPriceBucket}
                        onSearch={setSearch}
                    />
                </div>
                <ProductList items={sorted} />
                {pageData.length > 0 && <Pagination />}
            </div>
            <TopBtn />
        </ProductStyle>
    );
};

export default Product;
