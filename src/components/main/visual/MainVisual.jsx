import { VisualStyle } from "./style";

const MainVisual = () => {
    return (
        <VisualStyle>
            <video
                src="images/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                />
        </VisualStyle>
    );
};

export default MainVisual;