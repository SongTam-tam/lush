import { Link } from 'react-router-dom';
import { ButtonStyle } from './style';
import { useSelector } from 'react-redux';

const Button = () => {
    const { carts } = useSelector((state) => state.cart);
    return (
        <ButtonStyle>
            <Link to={carts.length > 0 ? '/pay' : alert('카트가 비어있습니다')}>
                <span>결제하기</span>
            </Link>
        </ButtonStyle>
    );
};

export default Button;
