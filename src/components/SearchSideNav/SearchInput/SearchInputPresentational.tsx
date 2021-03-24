import React from 'react';

import styled from '@emotion/styled';

function SearchInputPresentational() {
  return (
    <SearchBox>
      <SearchIcon />
      <SearchInput />
    </SearchBox>
  )
}

const SearchBox = styled.div`
    height: 42px;
    padding-left: 45px;
    border: 2px solid #19ce60;
`

const SearchIcon = styled.div``;
const SearchInput = styled.input``;
SearchInput.defaultProps = {
  type: "text", 
  placeholder: "검색 정보를 입력하세요"
}



export default SearchInputPresentational;