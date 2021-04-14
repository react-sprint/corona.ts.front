import React from "react";
import AfterSearchListItemContainer from "./AfterSearchListItem/AfterSearchListItemContainer";

function AfterSearchListPresentational() {
  return (
    <>
      <ul>
        {/* map으로 돌려야징 */}
        <AfterSearchListItemContainer/>
      </ul>
    </>
  )
}


export default AfterSearchListPresentational;