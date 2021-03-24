import React from "react";
import AfterSearchListContainer from "./AfterSearchList/AfterSearchListContainer";
import SearchSideNavContainer from "./SearchSideNavContainer";

// 레이아웃을 잡는다.
function SearchSideNav() {
  return (
    <>
      <AfterSearchListContainer />
      <SearchSideNavContainer />
    </>
  )
}


export default SearchSideNav;
