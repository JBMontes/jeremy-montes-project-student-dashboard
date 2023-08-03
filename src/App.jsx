import StudentList from "./Components/StudentList";
import Header from "./Components/Header.jsx";
import { useState } from "react";
import data from "./data/data.json"

function App() {

const [changeButtonText,setChangeButtonText]= useState("Show More")
const [isButtonPressed, setIsButtonPressed]= useState(false)
  
function ShowMoreStudentDetail(){
if(isButtonPressed === false){
    setChangeButtonText("Show Less")
}else{ 
    setChangeButtonText("Show More")
}}

  return (
    <div>
   
      <Header />

      <StudentList
      data={data}
      changeButtonText={changeButtonText}
      isButtonPressed={isButtonPressed}
      setIsButtonPressed={setIsButtonPressed}
      ShowMoreStudentDetail={ShowMoreStudentDetail}
      />

    </div>
  );
}

export default App;
