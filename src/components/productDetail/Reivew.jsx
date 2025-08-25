import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import ReviewList from "./ReviewList";
import { ReviewStyle } from "./style";

const Reivew = () => {
    const { currentProductReviews } = useSelector((state) => state.review);
    const avgRate =
    currentProductReviews.length > 0
      ? (
          currentProductReviews.reduce((sum, r) => sum + r.rate, 0) /
          currentProductReviews.length
        ).toFixed(1)
      : 0;
      const stars =
      "★".repeat(Math.round(avgRate)) +
      "☆".repeat(5 - Math.round(avgRate));
    return (
        <ReviewStyle>
            <div className="inner">

                <h2>Reviews</h2>
                <div className="review-wrap">
                    <div className="controls">
                        <p className="totalRate"><span>{stars}</span> {avgRate} / 5.0</p>
                        <p className="sorts"><span className="on">베스트순</span><span>최신순</span></p>
                        <p className="filterBtns">
                            <Button text="전체보기" width="100px" height="30px" type="button" className='on' bgColor="#000" textColor="#Fff"/>
                            <Button text="포토리뷰" width="100px" height="30px" type="button"/>
                        </p>
                    </div>
                    {currentProductReviews.length === 0 ? <p>아직 리뷰가 없습니다.</p>:
                        <ReviewList/>
                        }
                    <p className="write"><Button text="리뷰 작성" bgColor="#000" textColor="#fff"/></p>
                </div>
            </div>
        </ReviewStyle>
    );
};

export default Reivew;