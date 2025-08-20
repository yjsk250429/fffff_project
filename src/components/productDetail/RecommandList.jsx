import { useSelector } from 'react-redux';
import RecommandItem from './RecommandItem';
import { RecommandListStyle } from './style';

const RecommandList = ({thisItem}) => {
    const {products} = useSelector((state)=>state.product);
    const {type, collection, concernType } = thisItem;


    return (
        <RecommandListStyle>
            <div className="inner">
                <h2>관련 추천 제품</h2>
                <ul>
                    {
                     products.filter((product)=>product.type===type||product.collection === collection||product.concernTypes === concernType).slice(0, 4).map((product)=><RecommandItem key={product.id} product={product}/> )   
                    }
                </ul>
            </div>
        </RecommandListStyle>
    );
};

export default RecommandList;
