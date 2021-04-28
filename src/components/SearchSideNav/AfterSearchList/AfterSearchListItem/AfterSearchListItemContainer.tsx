import React, { useState } from "react";
import AfterSearchListItemPresentational from "./AfterSearchListItemPresentational";

function AfterSearchListItemContainer() {
  
  return (
    <>
      {[...Array(5)].map((_ , idx) => { // for test 0414
        return ( <AfterSearchListItemPresentational key={`searchListItem-${idx}`}
          // locationDetailVisible={locationDetailVisible}
          // handleOnLocationDetailClick={handleOnLocationDetailClick}
        />)
      })}
      
    </>
  )
}


export default AfterSearchListItemContainer;