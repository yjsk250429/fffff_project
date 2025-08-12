// import { useState } from 'react';
import { AboutStyle } from './style';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    // const [underline, setUnderLine] = useState('');

    return (
        <>
            <AboutStyle>
                <div className="visual">{/* <img src="" alt="" /> */}</div>
                
            </AboutStyle>
            <Outlet />
        </>
    );
};

export default About;
