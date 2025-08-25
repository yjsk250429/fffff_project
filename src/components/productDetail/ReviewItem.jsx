import { PiThumbsUpLight } from "react-icons/pi";


const ReviewItem = ({review}) => {
    const {rate, name, content, date, image, thumbs} = review;

    return (
        <li>
            <div className="img-wrap">
                <img src={image} alt={name} />
            </div>
            <div className="text-wrap">
                <p className="rate"><span>{"★".repeat(rate)}</span><span>{date}</span></p>
                <p className="content">{content}</p>
                <p className="thumbs"><strong>작성자 : {name}</strong><span><i><PiThumbsUpLight /></i>{thumbs}</span></p>
            </div>
        </li>
    );
};

export default ReviewItem;