import React from 'react';
import { SearchStyle } from './style';
import SearchList from '../../component/search/serachList/SearchList';
import { useSelector } from 'react-redux';

const Search = () => {
    const { search, searchdata } = useSelector((state) => state.search);
    return (
        <SearchStyle>
            {search.length < 1 ? (
                <div className="inner2">
                    <h2>{searchdata}검색결과가 존재하지 않습니다</h2>
                </div>
            ) : (
                <div className="inner">
                    <h2>
                        " <span>{searchdata}</span> " 검색결과
                    </h2>
                    <SearchList />
                </div>
            )}
        </SearchStyle>
    );
};

export default Search;
