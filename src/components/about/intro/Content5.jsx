import Button from '../../../ui/Button';

const Content5 = () => {
    return (
        <section id="con5">
            <div className="left">
                <img
                    src="/images/about/story11.png"
                    alt="자연의 가치를 전하며 한국에서 이어가는 록시땅의 특별한 공헌 활동"
                />
            </div>
            <div className="right">
                <strong>
                    자연의 가치를 전하며 <br />
                    한국에서 이어가는 록시땅의 특별한 공헌 활동
                </strong>
                <p>
                    자연과 사람을 위한 더 나은 내일을 만들기 위해, 록시땅은 다양한 노력을
                    이어갑니다. <br />
                    우리는 쓰레기를 줄이고, 시각 장애 어린이의 꿈을 지키며, 생물 다양성을 보존하는
                    활동을 통해
                    <br /> 지속가능한 아름다움을 전하고자 합니다.
                </p>
                {/* <p className="btn">
                    <button>함께하는 여정 보기</button>
                </p> */}
                <Button
                    text="함께하는 여정 보기"
                    width={'215px'}
                    height={'55px'}
                    className="btn"
                    bgColor="#00274C"
                    textColor="#fff"
                />
            </div>
        </section>
    );
};

export default Content5;
