import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import ReviewList from "./ReviewList";
import { ReviewStyle } from "./style";
import { useState } from "react";

const Reivew = () => {
    const { currentProductReviews } = useSelector((state) => state.review);
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("best");

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

      const toTS = (d) => {
        if (typeof d === "number") return d;
        if (d instanceof Date) return d.getTime();
        const normalized = String(d).trim().replace(/\./g, "-").replace(/\//g, "-");
        const ts = Date.parse(normalized);
        return Number.isNaN(ts) ? 0 : ts;
      };

      let filteredReviews =
      filter === "photo"
        ? currentProductReviews.filter((r) => r.image) // 이미지 있는 리뷰만
        : currentProductReviews;

        if (sort === "best") {
            filteredReviews = [...filteredReviews].sort((a, b) => b.thumbs - a.thumbs);
          } else if (sort === "latest") {
            // 문자열 비교가 가능한 포맷이면 아래 한 줄도 OK:
            // filteredReviews = [...filteredReviews].sort((a, b) => b.date.localeCompare(a.date));
            filteredReviews = [...filteredReviews].sort((a, b) => toTS(b.date) - toTS(a.date));
          }

    
    return (
        <ReviewStyle>
            <div className="inner">

                <h2>Reviews</h2>
                <div className="review-wrap">
                    <div className="controls">
                        <p className="totalRate"><span>{stars}</span><span>{avgRate}</span> / 5.0</p>
                        <p className="sorts"><span className={sort==="best"?"on" : ""} onClick={() => setSort("best")}>베스트순</span><span className={sort==="latest"?"on" : ""} onClick={() => setSort("latest")}>최신순</span></p>
                        <p className="filterBtns">
                            <Button text="전체보기" width="130px" height="35px" type="button" onClick={() => setFilter("all")} className={filter==="all"? "on":""} bgColor={filter==="all"? "#000":""} textColor={filter === "all" ? "#fff" : ""}/>
                            <Button text="포토리뷰" width="130px" height="35px" type="button" onClick={() => setFilter("photo")} className={filter==="photo"? "on" : ""}  bgColor={filter==="photo"? "#000":""} textColor={filter === "photo" ? "#fff" : ""}/>
                        </p>
                    </div>
                    {filteredReviews.length === 0 ? <p>아직 리뷰가 없습니다.</p>:
                        <ReviewList reviews={filteredReviews}/>
                        }
                    <p className="write"><Button text="리뷰 작성" bgColor="#000" textColor="#fff"/></p>
                </div>
            </div>
        </ReviewStyle>
    );
};

export default Reivew;