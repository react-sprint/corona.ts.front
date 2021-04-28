import React from "react";
import styled from '@emotion/styled';

import AfterSearchListContainer from "./AfterSearchList/AfterSearchListContainer";
import SearchSideNavContainer from "./SearchSideNavContainer";

import useSearchDispatch from "../../util/hooks/useSearchDispatch";

// 레이아웃을 잡는다.
function SearchSideNav() {

  const [dispatches, searchDispatch] = useSearchDispatch();

  return (
    <SideNavLayout>
      <SearchSideNavContainer onSearch={searchDispatch}/>
      <AfterSearchListContainer />
    </SideNavLayout>
  )
}
const SideNavLayout = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  padding: 0px 10px;
  z-index: 2;
  background-color: white;

  display:flex;
  flex-direction: column;
  flex-grow:1;
  
`

export default SearchSideNav;
