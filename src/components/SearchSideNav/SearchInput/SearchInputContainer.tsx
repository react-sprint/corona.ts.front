import React, {useState, useEffect} from "react";
import SearchInputPresentational from "./SearchInputPresentational";

interface ISearchInputContainer {
  handleOnSubmit: () => void,
  handleOnChangeSearchInput: (value: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchInputContainer({handleOnSubmit , handleOnChangeSearchInput, onSearch} : ISearchInputContainer ) {

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue === "리스트 아이템") {
      console.log("inputValue", inputValue)
    }
      //
  }, [inputValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    onSearch(inputValue)
  }

  return (
    <> 
      <SearchInputPresentational handleChange={handleChange}/>
    </>
  )
}

export default SearchInputContainer;