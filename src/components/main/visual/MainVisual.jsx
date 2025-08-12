import { VisualStyle } from "./style";

const MainVisual = () => {
    return (
        <VisualStyle id='visual'>
            <div className="inner">

            <video
                src="images/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                />
                </div>
        </VisualStyle>
    );
};

export default MainVisual;