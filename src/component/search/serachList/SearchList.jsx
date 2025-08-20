import React from 'react';
import { SearchListStyle } from './style';
import { useSelector } from 'react-redux';
import SearchItem from './SearchItem';

const SearchList = () => {
    const { search } = useSelector((state) => state.search);
    return (
        <SearchListStyle>
            {search.map((search) => (
                <SearchItem key={search.id} search={search} />
            ))}
        </SearchListStyle>
    );
};

export default SearchList;
