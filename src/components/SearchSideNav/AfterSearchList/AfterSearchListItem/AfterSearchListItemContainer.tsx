import React, { useState } from "react";
import AfterSearchListItemPresentational from "./AfterSearchListItemPresentational";

function AfterSearchListItemContainer() {
    const [locationDetailVisible,setLocationDetailVisible] = useState(false);
    const handleOnLocationDetailClick = (): void => {
        setLocationDetailVisible(!locationDetailVisible);
    };
  return (
    <>
      <AfterSearchListItemPresentational 
        locationDetailVisible={locationDetailVisible}
        handleOnLocationDetailClick={handleOnLocationDetailClick}
      />
    </>
  )
}


export default AfterSearchListItemContainer;