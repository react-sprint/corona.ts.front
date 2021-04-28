import React, {useState, useEffect} from "react";

function useSearchDispatch(): Array<any> {
  const [dispatches, setDispatches] = useState([]);
  
  const handleDispatch = (dispatch: any) => {
    setDispatches([...dispatches, dispatch]);
  }

  return [dispatches, handleDispatch]
}

export default useSearchDispatch;