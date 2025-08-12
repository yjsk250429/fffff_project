import MainVisual from "../../components/main/visual/MainVisual";
import BestProduct from "../../components/main/content1/BestProduct";
import BodyMain from "../../components/main/content2/BodyMain";
import HandMain from "../../components/main/content3/HandMain";
import HairMain from "../../components/main/content4/HairMain";
import Slogan from "../../components/main/content5/Slogan";
import Nature from "../../components/main/content6/Nature";
import SnoopyPromo from "../../components/main/promo/SnoopyPromo";
import DailyMoments from "../../components/main/content7/DailyMoments";
import { MainContentStyle } from "./style";

const Main = () => {
    return (
        <>
            <MainVisual/>
            <MainContentStyle id="content">
            <BestProduct/>
            <BodyMain/>
            <HandMain/>
            <HairMain/>
            <Slogan/>
            <Nature/>
            <SnoopyPromo/>
            <DailyMoments/>
            </MainContentStyle>
        </>
    );
};

export default Main;