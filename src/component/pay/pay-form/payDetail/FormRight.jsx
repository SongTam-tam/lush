import { useSelector } from 'react-redux';
import OrderedProduct from './compomentRight/OrderedProduct';
import PayInformation from './compomentRight/PayInformation';
import { FormRightStyle } from './style';
import CheckBox from './compomentRight/CheckBox';
import Button from './compomentRight/Button';

const FormRight = () => {
    const { carts } = useSelector((state) => state.cart);

    return (
        <FormRightStyle>
            <OrderedProduct carts={carts} /> <PayInformation carts={carts} />
            <CheckBox />
            <Button />
        </FormRightStyle>
    );
};

export default FormRight;
