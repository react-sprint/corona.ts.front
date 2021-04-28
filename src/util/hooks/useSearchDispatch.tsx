import React, {useState, useEffect} from "react";

function useSearchDispatch(): Array<string|any> {
  const [value, setDispatch] = useState<string>();
  
  const handleDispatch = (searchValue: string) => {
    setDispatch(searchValue);
    console.log("useSearchDispatch", searchValue, value)
  }

  return [value, handleDispatch]
}

export default useSearchDispatch;