import React, { useEffect } from "react";
import AfterSearchListItemPresentational from "./AfterSearchListItemPresentational";

function AfterSearchListItemContainer({searchValue}) {
  
  
  return (
    <>
      { searchValue === "리스트 아이템" 
        ? [...Array(5)].map((_ , idx) => { // for test 0414
          return ( <AfterSearchListItemPresentational key={`searchListItem-${idx}`}
            // locationDetailVisible={locationDetailVisible}
            // handleOnLocationDetailClick={handleOnLocationDetailClick}
            />)
          })
        : <span> 검색 결과가 없습니다. </span>
      }
      
    </>
  )
}


export default AfterSearchListItemContainer;