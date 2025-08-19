import { IoSearchOutline } from 'react-icons/io5';
import { ProductSearchWrap } from './style';
import { useState } from 'react';

const ProductInput = () => {
    const [filterOn, setFilterOn] = useState(false);

    const onFilter = (e) => {
        e.preventDefault();
        setFilterOn((prev) => !prev);
    };

    return (
        <ProductSearchWrap>
            <form>
                <p className="search">
                    <i>
                        <IoSearchOutline />
                    </i>
                    <input type="text" name="" id="" />
                </p>
                <div className="filter">
                    <p>
                        <button onClick={onFilter}>
                            Filter <span>{filterOn ? '-' : '+'}</span>
                        </button>
                    </p>

                    <div className={filterOn ? 'option on' : 'option'}>
                        <ul>
                            <li>고민 타입</li>
                            <li>
                                <input type="checkbox" value="" name="concern" id="chk1" />
                                <label htmlFor="chk1">데일리 케어</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="concern" id="chk2" />
                                <label htmlFor="chk2">영양 보습</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="concern" id="chk3" />
                                <label htmlFor="chk3">수분 보습</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="concern" id="chk4" />
                                <label htmlFor="chk4">지성 케어</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="concern" id="chk5" />
                                <label htmlFor="chk5">맨 케어</label>
                            </li>
                        </ul>
                        <ul>
                            <li>텍스쳐</li>
                            <li>
                                <input type="checkbox" value="" name="texture" id="chk6" />
                                <label htmlFor="chk6">크림</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="texture" id="chk7" />
                                <label htmlFor="chk7">밤&버터</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="texture" id="chk8" />
                                <label htmlFor="chk8">리퀴드</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="texture" id="chk9" />
                                <label htmlFor="chk9">솔리드</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="texture" id="chk10" />
                                <label htmlFor="chk10">오일</label>
                            </li>
                        </ul>
                        <ul>
                            <li>콜렉션</li>
                            <li>
                                <input type="checkbox" value="" name="collection" id="chk11" />
                                <label htmlFor="chk11">시어버터</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="collection" id="chk12" />
                                <label htmlFor="chk12">체리 블라썸</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="collection" id="chk13" />
                                <label htmlFor="chk13">로즈</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="collection" id="chk14" />
                                <label htmlFor="chk14">버베나</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="collection" id="chk15" />
                                <label htmlFor="chk15">아몬드</label>
                            </li>
                        </ul>
                        <ul>
                            <li>가격</li>
                            <li>
                                <input type="checkbox" value="" name="price" id="chk16" />
                                <label htmlFor="chk16">10,000원대</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="price" id="chk17" />
                                <label htmlFor="chk17">20,000원대</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="price" id="chk18" />
                                <label htmlFor="chk18">30,000원대</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="price" id="chk19" />
                                <label htmlFor="chk19">40,000원대</label>
                            </li>
                            <li>
                                <input type="checkbox" value="" name="price" id="chk20" />
                                <label htmlFor="chk20">50,000원 이상</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductInput;
