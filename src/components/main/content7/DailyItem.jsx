const DailyItem = ({daily, addToRefs}) => {
    const {title, desc, tags, img} = daily;
    return (
        <li ref={addToRefs}>
            <a href="https://www.instagram.com/loccitanekorea/#">
            <div className="img-wrap">
                <img src={img} alt={title} />
            </div>
            </a>
            <strong>{title}</strong>
            <p>{desc}</p>
            <p>{
                tags.map((tag)=><span key={tag}>#{tag}</span>)
            }</p>
        </li>
    );
};

export default DailyItem;
