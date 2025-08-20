import { useNavigate } from 'react-router-dom';
import NewList from './NewList/NewList';
import { NewStyle } from './style';

const New = () => {
    const nav = useNavigate();

    return (
        <NewStyle>
            <h2>NEW ARRIVAL</h2>
            <p className="pabtn">
                <button onClick={() => nav('/shop')}>view all</button>
            </p>
            <div className="content">
                <NewList />
            </div>
        </NewStyle>
    );
};

export default New;
