import { Link, useNavigate } from 'react-router-dom';
import { ButtonStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../../../store/modules/CartSlice';

const Button = () => {
    const { carts } = useSelector((state) => state.cart);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const onCom = () => {
        nav('/payComplete');
        dispatch(cartActions.Compl());
    };
    return (
        <ButtonStyle onClick={onCom}>
            <Link>
                <span>결제하기</span>
            </Link>
        </ButtonStyle>
    );
};

export default Button;
