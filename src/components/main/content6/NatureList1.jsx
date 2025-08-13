import { useSelector } from "react-redux";
import NatureItem1 from "./NatureItem1";
import { NatureListStyle } from "./style";

const NatureList1 = ({hovered1, setHovered1}) => {
    const {natures} = useSelector((state)=>state.nature);
    const newItem = natures.filter((nature)=>nature.id >= 1 && nature.id <= 6);
    return (
        <NatureListStyle>
            {
                newItem.map((item)=><NatureItem1 key={item.id} item={item}
                onEnter={() => setHovered1(item.id)}
          onLeave={() => setHovered1(null)}
          active={hovered1 === item.id}/>)
            }
        </NatureListStyle>
    );
};

export default NatureList1;