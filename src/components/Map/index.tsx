import React from "react";
import styled from '@emotion/styled';

import MapContainer from "./MapContainer";

function Map(){
    return(
        <MapLayout>
          <MapContainer />
        </MapLayout>
    )
}

const MapLayout = styled.div`
  display:flex;
  flex-grow: 11;
`
export default Map;
