const DailyItem = ({daily}) => {
    const {title, desc, tags, img} = daily;
    return (
        <li>
            <div className="img-wrap">
                <img src={img} alt={title} />
            </div>
            <strong>{title}</strong>
            <p>{desc}</p>
            <p>{
                tags.map((tag)=><span key={tag}>#{tag}</span>)
                }</p>
        </li>
    );
};

export default DailyItem;
