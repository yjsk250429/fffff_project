import { IoSearchOutline } from 'react-icons/io5';
import { ProductSearchWrap } from './style';
import { useState } from 'react';

const ProductInput = ({ filters, onToggle, onTogglePrice, onSearch }) => {
    const [filterOn, setFilterOn] = useState(false);

    const onFilter = (e) => {
        e.preventDefault();
        setFilterOn((prev) => !prev);
    };
    const isChecked = (group, value) => filters[group]?.includes(value);

    return (
        <ProductSearchWrap>
            <form onSubmit={(e) => e.preventDefault()}>
                <p className="search">
                    <i>
                        <IoSearchOutline />
                    </i>
                    <input type="text" value={filters.q} onChange={(e) => onSearch(e.target.value)}/>
                </p>
                <div className="filter">
                    <p>
                        <button onClick={onFilter} type="button">
                            Filter <span>{filterOn ? '-' : '+'}</span>
                        </button>
                    </p>

                    <div className={filterOn ? 'option on' : 'option'}>
                        <ul>
                            <li>고민 타입</li>
                            {[
                '데일리 케어',
                '영양 보습',
                '수분 보습',
                '지성 케어',
                '맨 케어',
              ].map((v, idx) => (
                <li key={v}>
                  <input
                    type="checkbox"
                    id={`concern-${idx}`}
                    checked={isChecked('concernType', v)}
                    onChange={() => onToggle('concernType', v)}
                  />
                  <label htmlFor={`concern-${idx}`}>{v}</label>
                </li>
              ))}
                        </ul>
                        <ul>
                            <li>텍스쳐</li>
                            {['크림', '밤&버터', '리퀴드', '솔리드', '오일'].map((v, idx) => (
                <li key={v}>
                  <input
                    type="checkbox"
                    id={`texture-${idx}`}
                    checked={isChecked('texture', v)}
                    onChange={() => onToggle('texture', v)}
                  />
                  <label htmlFor={`texture-${idx}`}>{v}</label>
                </li>
              ))}
                        </ul>
                        <ul>
                            <li>콜렉션</li>
                            {['시어버터', '체리 블라썸', '로즈', '버베나', '아몬드'].map((v, idx) => (
                <li key={v}>
                  <input
                    type="checkbox"
                    id={`collection-${idx}`}
                    checked={isChecked('collection', v)}
                    onChange={() => onToggle('collection', v)}
                  />
                  <label htmlFor={`collection-${idx}`}>{v}</label>
                </li>
              ))}
                        </ul>
                        <ul>
                            <li>가격</li>
                            {[
                { key: '10k',  label: '10,000원대' },
                { key: '20k',  label: '20,000원대' },
                { key: '30k',  label: '30,000원대' },
                { key: '40k',  label: '40,000원대' },
                { key: '50k+', label: '50,000원 이상' },
              ].map(({ key, label }, idx) => (
                <li key={key}>
                  <input
                    type="checkbox"
                    id={`price-${idx}`}
                    checked={isChecked('price', key)}
                    onChange={() => onTogglePrice(key)}
                  />
                  <label htmlFor={`price-${idx}`}>{label}</label>
                </li>
              ))}
                        </ul>
                    </div>
                </div>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductInput;
