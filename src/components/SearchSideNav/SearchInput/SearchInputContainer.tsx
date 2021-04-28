import React, { useState, useEffect, useRef } from "react";
import SearchInputPresentational from "./SearchInputPresentational";

interface ISearchInputContainer {
  handleSearch: (value: string) => void,
}

function SearchInputContainer({handleSearch} : ISearchInputContainer ) {

  const [inputValue, setInputValue] = useState("");
  const debouncedSearch = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (inputValue === "리스트 아이템") {
      console.log("inputValue", inputValue)
    }

    if (debouncedSearch.current) clearTimeout(debouncedSearch.current)
    debouncedSearch.current = setTimeout(() => {
      console.log("search")
      handleSearch(inputValue);
    }, 1000);

  }, [inputValue])

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  }

  return (
    <> 
      <SearchInputPresentational handleChangeSearchInput={handleChangeSearchInput}/>
    </>
  )
}

export default SearchInputContainer;