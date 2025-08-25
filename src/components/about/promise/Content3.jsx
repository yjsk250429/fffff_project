import React from 'react';
import Button from '../../../ui/Button';

const Content3 = () => {
    return (
        <section id="con3">
            <div className="top">
                <div className="img-wrap">
                    <img src="/images/about/promise12.png" alt="매장 방문을 통한 참여" />
                </div>
                <div className="text-wrap">
                    <strong>공병수거 캠페인</strong>
                    <p>
                        록시땅의 RETHINK BEAUTY 캠페인은 지구를 존중하고 지키는 것이 <br />
                        진정한 아름다움이라는 메시지를 전하는 환경 캠페인으로 <br />
                        2018년부터 꾸준히 공병수거 캠페인을 전개하여 지속가능한 자원순환 활동을
                        이어오고 있습니다.
                    </p>
                    <em>지속 가능한 내일을 만드는, 두 번째 삶을 얻은 공병들</em>
                    <p>
                        <span className="num">01</span>
                        텀블러와 에코백, 솝 트레이 등으로 재탄생해 록시땅 고객에게 새롭게 전달되며
                        자원 순환을 실천합니다.
                    </p>

                    <p>
                        <span className="num">02</span>
                        록시땅 매장 내 집기류 및 디스플레이 가구로 재탄생하여지속가능한 자원순환을
                        실천하고 있습니다.
                    </p>
                </div>
            </div>
            <div className="card">
                <ul>
                    <li>
                        <img src="/images/about/promise13.png" alt="공병수거캠페인" />
                        <strong>매장 방문을 통한 참여</strong>
                        <p>가까운 록시땅 매장에서 공병수거 캠페인에 참여하세요.</p>

                        <Button text="매장 찾기" bgColor="#000" textColor="#fff" />
                    </li>
                    <li>
                        <img src="/images/about/promise14.png" alt="온라인 채널을 통한 참여 " />
                        <strong>온라인 채널을 통한 참여</strong>
                        <p>테라사이클 홈페이지에서 온라인 수거를 신청하세요.</p>

                        <Button text="참여 신청하기" bgColor="#000" textColor="#fff" />
                    </li>
                    <li>
                        <img src="/images/about/promise15.png" alt="에코리필" />
                        <strong>에코리필</strong>
                        <p>환경을 위하는 록시땅과 함께 해주세요.</p>

                        <Button text="리필 제품 보기" bgColor="#000" textColor="#fff" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Content3;
