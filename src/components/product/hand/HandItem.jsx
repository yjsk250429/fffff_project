import { Link } from "react-router-dom";

const HandItem = ({product}) => {
    const {id, label, title, unit, description, image, option} = product;
    // const {size, price} = option[0];
    const selectedOption = option?.length > 1 
    ? option[1] 
    : option?.length === 1 
      ? option[0] 
      : null;

  const price = selectedOption?.price ?? "가격 없음";
  const size = selectedOption?.size ?? "사이즈 정보 없음";

    return (
        <article>
            <Link to={`/hand/${id}`}>
            <div>
                <img src={image} alt={title} />
            </div>
            <h3>{label}</h3>
            <h4>{title}</h4>
            <p>
                {size}{unit}<span>{price}원</span>
            </p>
            </Link>
        </article>
    );
};

export default HandItem;