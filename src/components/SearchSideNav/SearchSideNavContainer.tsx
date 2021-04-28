import React, { useState } from "react";

import SearchInputContainer from "./SearchInput/SearchInputContainer";
import RollingNoticeContainer from "./RollingNotice/RollingNoticeContainer";

import { ISearchSideNavState } from "./interface";

function SearchSideNavContainer({onSearch}) {
  const [state, setState] = useState<ISearchSideNavState>({
    searchInput: null,
    rollingNotice: null
  });
  
  const handleOnSubmit = (): void => {
    // API CALL
  }

  const handleOnChangeSearchInput = (value: string): void => {
    setState({ ...state, searchInput: value });
  }

 
  return (
    <>
      <SearchInputContainer handleOnSubmit={handleOnSubmit} handleOnChangeSearchInput={handleOnChangeSearchInput} onSearch={onSearch}/>
      <RollingNoticeContainer />
    </>
  )
}

export default SearchSideNavContainer;