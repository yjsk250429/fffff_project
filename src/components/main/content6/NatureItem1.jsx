import { NatureItemStyle } from "./style";

const NatureItem1 = ({ item, onEnter, onLeave, active }) => {
    const {id, title, icon} = item;
    return (
        <NatureItemStyle
        onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      data-active={active ? "true" : "false"} // 스타일에서 활용 가능
      role="listitem">
            <div className="img-wrap">
            <img src={icon} alt={title} />
            </div>
            <p>{title}</p>
        </NatureItemStyle>
    );
};

export default NatureItem1;