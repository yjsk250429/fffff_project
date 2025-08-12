import { CsCenterVisual } from "./style";
import { Outlet } from "react-router-dom";

const CsCenter = () => {

    return (
        <>
            <CsCenterVisual>
                <div className="visual">
                <img src="" alt="" />
                </div>
            </CsCenterVisual>
            <Outlet/>
        </>
    );
};

export default CsCenter;