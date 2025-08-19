import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Content3 = () => {
    const listRef = useRef(null);

    useEffect(() => {
        const elements = listRef.current.querySelectorAll('li');

        elements.forEach((el) => {
            const isRight = el.classList.contains('story_right');

            gsap.fromTo(
                el,
                { x: isRight ? 200 : -200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        end: 'top 50%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);
    const stories = [
        {
            id: 1,
            side: 'story_right',
            left: (
                <>
                    <em>01</em>
                    <span>We Grow Nature</span>
                    <strong>우리는 자연을 키웁니다</strong>
                    <p>
                        지속가능한 경작과 농업 생태학적 방법에 따라 유기농 재료를 재배합니다. <br />
                        원재료들은 지속가능한 방법으로 재배되고 <br />
                        자연 생태계에 해가 되지 않는 방안으로 운영되고 있습니다.
                    </p>
                </>
            ),
            right: <img src="/images/about/story04.png" alt="우리는 자연을 키웁니다" />,
        },
        {
            id: 2,
            side: 'story_left',
            left: <img src="/images/about/story05.png" alt="우리는 경이로움을 발견합니다" />,
            right: (
                <>
                    <span>We Reveal Wonders</span>
                    <strong>우리는 경이로움을 발견합니다</strong>
                    <em>02</em>
                    <p>
                        자연이 그러하듯 모발/피부에도 저마다 고유의 생태계를 가지고 있습니다. <br />
                        새로운 결과가 도출될 때까지 지속적으로 연구하는 과학자들과 함께 <br />
                        팀을 이루어 연구 개발에 매진합니다.
                    </p>
                </>
            ),
        },
        {
            id: 3,
            side: 'story_right',
            left: (
                <>
                    <em>03</em>
                    <span>We Craft Sensation</span>
                    <strong>우리는 감각을 만듭니다</strong>
                    <p>
                        감각을 자극함으로써 새로운 감각을 만들어냅니다. <br />
                        우리는 오랫동안 지속되는 추억을 만들어내고 <br />
                        고객의 기억에 오랫동안 남는 순간을 만들기 위해 노력합니다. <br />
                        사랑하는 이들을 위한 록시땅의 선물은 영원히 빛날 것입니다.
                    </p>
                </>
            ),
            right: <img src="/images/about/story06.png" alt="우리는 감각을 만듭니다" />,
        },
        {
            id: 4,
            side: 'story_left',
            left: <img src="/images/about/story07.png" alt="우리는 지역적으로 행동합니다" />,
            right: (
                <>
                    <span>We Act Locally</span>
                    <strong>우리는 지역적으로 행동합니다</strong>
                    <em>04</em>
                    <p>
                        세상은 변화해야하며 우리는 이 변화에 책임을 갖고 있습니다. <br />
                        록시땅의 직원과 고객 그리고 <br />
                        우리가 매일 함께하고 있는 모두가 변화를 만들어낼 수 있습니다. <br />
                        지역적 차원에서 취하는 행동은 세계적으로 더 좋은 삶을 만들 수 있습니다.
                    </p>
                </>
            ),
        },
    ];
    return (
        <section id="con3">
            <div className="head">
                <span>우리의 이야기는 4개의 장으로 나뉩니다.</span>
                <h3>Our Story Is Divided into Four Chapters</h3>
            </div>

            <ul className="list" ref={listRef}>
                {stories.map((story) => (
                    <li key={story.id} className={story.side}>
                        <div className="left">{story.left}</div>
                        <div className="right">{story.right}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Content3;
