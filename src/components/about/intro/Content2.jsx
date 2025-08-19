import React from 'react';

const Content2 = () => {
    return (
        <section id="con2">
            <div className="story">
                <strong>All About L'OCCITANE</strong>
                <em>프로방스에서 시작된 록시땅의 이야기를 들려드립니다.</em>
                <p>
                    록시땅의 여정은 브랜드 청립자인 올리비에 보쏭이 프로방스 지방에서 자라는
                    <br />
                    원재료를 통해 에센셜 오일을 증류하고 판매하면서 시작되었습니다. 이후 브랜드는
                    <br /> 급속도로 성장했지만 자연을 향한 철학은 단 한 순간도 변치 않았습니다.{' '}
                    <br /> 록시땅은 자연을 소중히 여기고 경작자를 존중합니다.
                    <br />
                </p>
            </div>
            <div className="story_img">
                <img src="/images/about/story03.png" alt="all about loccitane" />
            </div>
        </section>
    );
};

export default Content2;
