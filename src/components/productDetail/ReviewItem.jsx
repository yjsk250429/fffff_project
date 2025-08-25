import { PiThumbsUpFill, PiThumbsUpLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { reviewActions } from "../../store/modules/reviewSlice";


const ReviewItem = ({review, index, productId }) => {
    const {reviewId, rate, name, content, date, image, thumbs, liked =false} = review;
    const dispatch = useDispatch();
    const handleThumbClick = () => {
        dispatch(reviewActions.toggleThumb({ productId, reviewId }));
      };
    
    return (
        <li>
             {image && (
    <div className="img-wrap">
      <img src={image} alt={name} />
    </div>
  )}
            <div className={image?"text-wrap":"text-wrap on"}>
                <p className="rate"><span>{"★".repeat(rate)}</span><span>{date}</span></p>
                <p className="content">{content}</p>
                <p className="thumbs"><strong>작성자 : {name}</strong><span><i onClick={handleThumbClick}>{liked?<PiThumbsUpFill />:<PiThumbsUpLight />}</i>{thumbs}</span></p>
            </div>
        </li>
    );
};

export default ReviewItem;