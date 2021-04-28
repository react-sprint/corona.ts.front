import React from 'react';

import styled from '@emotion/styled';

interface ISearchInputPresentational {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface ISearchInputProp {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchInputPresentational({ handleChange } :ISearchInputPresentational) {
  return (
    <SearchBox>
      <SearchIcon> ICON </SearchIcon>
      <SearchInput onChange={handleChange} />
    </SearchBox>
  )
}

const SearchBox = styled.div`
  height: 42px;
  border: 2px solid #19ce60;
  display: flex;
`

const SearchIcon = styled.div`
  width: 45px;
  display:flex;
  align-items: center;
`;
const SearchInput = styled.input<ISearchInputProp>`
  width: 100%;
  height: 100%;
`;

SearchInput.defaultProps = {
  type: "text", 
  placeholder: "검색 정보를 입력하세요"
}



export default SearchInputPresentational;