import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = ({ theme = 'default' }) => {
    return (
        <div className="wrap" data-theme={theme === 'spcial' ? 'spacial' : undefined}>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
