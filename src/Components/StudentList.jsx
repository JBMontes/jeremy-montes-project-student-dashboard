import { useState } from "react";
import "../Components/StudentList.css"
// import data from "../data/data.json"
import OnTrackStatus from "./OnTrackStatus.jsx";


function StudentList({data}){


  
return (
<div className="studentList">
{data.map((students)=>{
     
     return (
        <div className="students">
        <img src={students.profilePhoto} width="90px" height="90px"></img>
      <h2>{students.names.preferredName} {students.names.middleName} {students.names.surname}</h2>
      <h3>{students.username}</h3>
      <h3><span>Birthday: </span>{students.dob}</h3>
    
        <OnTrackStatus
        data={data} 
        students={students}/>
       </div>
      )
     }) }
    
</div>
)
}

export default StudentList