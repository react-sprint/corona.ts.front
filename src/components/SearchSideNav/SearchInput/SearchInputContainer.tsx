import React from "react";
import SearchInputPresentational from "./SearchInputPresentational";

interface ISearchInputContainer {
  handleOnSubmit: () => void,
  handleOnChangeSearchInput: (value: string) => void
}

function SearchInputContainer({handleOnSubmit , handleOnChangeSearchInput} : ISearchInputContainer ) {
  return(
    <> 
      <SearchInputPresentational />
    </>
  )
}

export default SearchInputContainer;