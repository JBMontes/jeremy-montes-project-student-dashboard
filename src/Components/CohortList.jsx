import data from "../data/data.json"
import StudentList from "./StudentList.jsx"
import '../Components/CohortList.css'
function CohortList(){

    return(
<>
<div className="cohortList">

<ul>Choose a Class By Start Date

<li>All Students</li>

<li 

>Winter 2026</li>

<li>Fall 2026</li>

<li>Summer 2026</li>

<li>Spring 2026</li>

<li>Winter 2025</li>

<li>Fall 2025</li>

<li>Summer 2025</li>

<li>Spring 2025</li>

</ul>

</div>
</>
   
)
}

export default CohortList





{/* {StudentList.map((list)=> {
    
    return(
   
  <li> {list.cohort.cohortCode} </li>
        
     )
 })
} */}