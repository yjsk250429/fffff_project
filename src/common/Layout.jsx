import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = ({ theme = 'default' }) => {
    return (
        <div className="wrap" data-theme={theme === 'special' ? 'special' : undefined}>
            <Header theme={theme} />
            <main className="main">
                <Outlet />
            </main>
            <Footer theme={theme} />
        </div>
    );
};

export default Layout;
