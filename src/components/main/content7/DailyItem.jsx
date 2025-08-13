const DailyItem = ({daily}) => {
    const {title, desc, tags, img} = daily;
    return (
        <li>
            <img src={img} alt={title} />
            <strong>{title}</strong>
            <p>{desc}</p>
            <p>{
                tags.map((tag)=><span key={tag}>#{tag}</span>)
                }</p>
        </li>
    );
};

export default DailyItem;
