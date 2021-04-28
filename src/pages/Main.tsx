import React from "react";
import styled from '@emotion/styled';

import Map from "../components/Map";
import Sidebar from "../components/sidebar/Sidebar";
import SearchSideNav from "../components/SearchSideNav";

function Main(){
  return (
    <MainLayout>
      {/* <Sidebar/> */}
      <SearchSideNav />
      <Map/>
    </MainLayout>
  )
}

const MainLayout = styled.div`
  display:flex;
`

export default Main;
