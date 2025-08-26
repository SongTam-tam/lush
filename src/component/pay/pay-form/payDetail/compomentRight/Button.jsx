import { Link, useNavigate } from 'react-router-dom';
import { ButtonStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';

const Button = () => {
    const { carts } = useSelector((state) => state.cart);
    const nav = useNavigate();
    const dispatch = useDispatch();
    return (
        <ButtonStyle>
            <Link to={carts.length > 0 ? '/pay' : alert('카트가 비어있습니')}>
                <span>결제하기</span>
            </Link>
        </ButtonStyle>
    );
};

export default Button;
