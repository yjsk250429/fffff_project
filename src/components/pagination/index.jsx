import { useDispatch, useSelector } from 'react-redux';
import { PaginationStyle } from './style';
import { paginationActions } from '../../store/modules/paginationSlice';

const Pagination = () => {
    const {totalPages, currentPage} = useSelector((state)=>state.pagination)
    const dispatch = useDispatch();
    const pageArray = [...Array(totalPages)].map((_, i)=> i +1);
    return (
        <PaginationStyle>
            <div>

               <p>
               <button onClick={()=>dispatch(paginationActions.prevPage())}>
                    <img src="/images/dropdownArrow.png" alt="prev" />
                </button>
                </p> 
                <p>

                {pageArray.map((item)=><button key={item} className={currentPage===item?'on':''} onClick={()=>dispatch(paginationActions.goToPage(item))}>{item}</button>)}
                </p>
                <p>

                <button onClick={()=>dispatch(paginationActions.nextPage())}>
                <img src="/images/dropdownArrow.png" alt="next" />
                </button>
                </p>
            </div>
        </PaginationStyle>
    );
};

export default Pagination;
