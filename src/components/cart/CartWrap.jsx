import { CartWrapStyle } from './style';
import CartRight from './CartRight';
import CartList from './CartList';
import { IoPerson } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../ui/BreadCrumb';

const CartWrap = () => {
    const { authed } = useSelector((state) => state.auth);

    return (
        <CartWrapStyle>
            <div className="inner">
                <BreadCrumb text1='CART' text2='ORDER' text3='ORDER COMPLETE' color1="#000"/>
                <h2>장바구니</h2>

           {!authed &&
                <div className="login-info">
                    <strong>
                        <Link to="/login">
                        <i><IoPerson /></i>
                        로그인 후 더 많은 혜택을 누려보세요.
                        </Link>
                    </strong>
                    <em>
                         <i><FiAlertCircle /></i>
                        로그인을 하시면 장바구니에 담긴 상품을 나중에도 확인하실 수 있습니다.
                    </em>
                </div>
                }

                <div className="first wrap">
                    <CartList />
                    <CartRight />
                </div>
            </div>
        </CartWrapStyle>
    );
};

export default CartWrap;
