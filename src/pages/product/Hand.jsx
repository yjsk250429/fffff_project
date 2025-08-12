import HandList from "../../components/product/hand/HandList";
import { HandStyle } from "./style";

const Hand = () => {

    return (
        <HandStyle>
            <div className="inner">
                <h2>핸드케어</h2>
                <HandList/>
            </div>
        </HandStyle>
    );
};

export default Hand;