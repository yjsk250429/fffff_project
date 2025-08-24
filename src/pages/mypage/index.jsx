import { useSelector } from 'react-redux';
import GuestOrderCheck from '../../components/mypage/GuestOrderCheck';
import MyPageMain from '../../components/mypage/MyPageMain';

const MyPage = () => {
    const { authed } = useSelector((state) => state.auth || { authed: false });

    if (!authed) return <GuestOrderCheck />;
    return <MyPageMain />;
};

export default MyPage;
