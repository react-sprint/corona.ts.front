import React, { useState } from "react";

import SearchInputContainer from "./SearchInput/SearchInputContainer";
import RollingNoticeContainer from "./RollingNotice/RollingNoticeContainer";

import { ISearchSideNavState } from "./interface";

function SearchSideNavContainer({ handleSearchDispatch }) {
  const [state, setState] = useState<ISearchSideNavState>({
    searchInput: null,
    rollingNotice: null
  });
  
  const handleOnSubmit = (): void => {
    // API CALL
  }

  // const handleOnChangeSearchInput = (value: string): void => {
  //   setState({ ...state, searchInput: value });
  // }
  const handleSearch = (value: string) => {
    console.log("handleSearch", value);
    handleSearchDispatch(value);
  }
 
  return (
    <>
      <SearchInputContainer handleSearch={handleSearch} />
      <RollingNoticeContainer />
    </>
  )
}

export default SearchSideNavContainer;