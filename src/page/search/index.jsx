import React from 'react';
import { SearchStyle } from './style';
import SearchList from '../../component/search/serachList/SearchList';

const Search = () => {
    return (
        <SearchStyle>
            <div className="inner">
                <SearchList />
            </div>
        </SearchStyle>
    );
};

export default Search;
