import { useSelector } from "react-redux";
import { NatureListStyle } from "./style";
import NatureItem2 from "./NatureItem2";

const NatureList2 = ({hovered2, setHovered2}) => {
    const {natures} = useSelector((state)=>state.nature);
    const newItem = natures.filter((nature)=>nature.id >= 7 && nature.id <= 12);
    return (
        <NatureListStyle>
             {
                newItem.map((item)=><NatureItem2 key={item.id} item={item}
                onEnter={() => setHovered2(item.id)}
          onLeave={() => setHovered2(null)}
          active={hovered2 === item.id}
                />)
            }
        </NatureListStyle>
    );
};

export default NatureList2;