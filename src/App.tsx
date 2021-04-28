import React from "react";
import Main from "./pages/Main";
import {globalStyles} from './common/globalStyles';
import {Global} from '@emotion/react';

function App(){
  return(
    <>
      <Global styles={globalStyles} />
      <Main />
    </>
  )
}

export default App;
