import React from "react";
import AfterSearchListItemContainer from "./AfterSearchListItem/AfterSearchListItemContainer";

function AfterSearchListContainer({searchValue}) {
  return (
    <>
      <AfterSearchListItemContainer searchValue={searchValue}/>
    </>
  )
}


export default AfterSearchListContainer;