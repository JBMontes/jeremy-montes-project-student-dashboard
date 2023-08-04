import StudentList from "./Components/StudentList";
import Header from "./Components/Header.jsx";
import { useState } from "react";
import CohortList from "./Components/CohortList.jsx";


function App() {

  const [listBySeason, setListBySeason] = useState(StudentList())

  return (
    <>
    <Header />
  
<CohortList className="cohortList"  />

 <StudentList />

    </>
  );
}


export default App;
