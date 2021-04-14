import React from "react";
import Map from "../components/map/Map";
//import Map from "../components/Map";

import Sidebar from "../components/sidebar/Sidebar";
import SearchSideNav from "../components/SearchSideNav";

function Main(){
    return(
        <>
            <Sidebar/>
            <Map/>
            <SearchSideNav />
        </>
    )
}

export default Main;
