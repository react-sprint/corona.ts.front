import React, { useEffect } from "react";
import styled from '@emotion/styled';
import { Map_Key } from './config';

declare global {
  interface Window {
    kakao: any;
  }
}
  
function MapContainer(){
    useEffect(()=>{
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${Map_Key}&autoload=false`;
        document.head.appendChild(script);
        script.onload = () => {
            window.kakao.maps.load(() => {
              let container = document.getElementById("Mymap");
              let options = {
                center: new window.kakao.maps.LatLng(37.506502, 127.053617),
                level: 7
              };
      
              const map = new window.kakao.maps.Map(container, options);
           
            });
          };
    },[])

    return(
        <MapContents id="Mymap"></MapContents>
    )
}
const MapContents = styled.div`
  width: 100%;
  height: 100vh;
`;

export default MapContainer;
