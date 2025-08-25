
import { useParams } from "react-router-dom";
import ReviewItem from "./ReviewItem";
import { ReviewListStyle } from "./style";


const ReviewList = ({ reviews }) => {
    const { productID } = useParams();
    const pid = Number(productID);
    return (
        <ReviewListStyle>
            {
              reviews.map((review, idx) => (
                <ReviewItem key={idx} index={idx} review={review} productId={pid} />
            ))
            }
        </ReviewListStyle>
    );
};

export default ReviewList;