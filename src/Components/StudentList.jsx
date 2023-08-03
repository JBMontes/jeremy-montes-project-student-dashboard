import { useState } from "react";

// import data from "../data/data.json"



function StudentList({data}){


  
return (
<>
{data.map((students)=>{
     
     return (
        <>
        <img src={students.profilePhoto}></img>
      <h2>{students.names.preferredName} {students.names.middleName} {students.names.surname}</h2>
      <h3>{students.username}</h3>
      <h3><span>Birthday: </span>{students.dob}</h3>
       </>
      )
     }) }
</>
)
}

export default StudentList