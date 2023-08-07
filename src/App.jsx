
import { useState } from "react";
import Header from "./Components/Header.jsx";
import CohortList from "./Components/CohortList.jsx";
import CommenterForm from "./Components/CommenterForm.jsx";


function App() {

  return (
    <>
    <Header />

    <CohortList className="cohortList"  />
 

    </>
  );
}


export default App;
