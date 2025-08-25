import { useSelector } from "react-redux";
import ReviewItem from "./ReviewItem";
import { ReviewListStyle } from "./style";


const ReviewList = () => {
    const {currentProductReviews } = useSelector((state)=>state.review);

    return (
        <ReviewListStyle>
            {
              currentProductReviews.map((review, idx) => (
                <ReviewItem key={idx} review={review} />
            ))
            }
        </ReviewListStyle>
    );
};

export default ReviewList;