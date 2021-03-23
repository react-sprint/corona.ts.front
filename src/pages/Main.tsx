import Map from "../components/map/Map";
import Sidebar from "../components/sidebar/Sidebar";
import * as React from "react";
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
