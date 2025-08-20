import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTop = () => {
    const top = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [top.pathname]);
    return null;
};

export default PageTop;
