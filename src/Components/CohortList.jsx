import data from "../data/data.json";
import { useState } from "react";
import "../Components/CohortList.css";
import StudentList from "./StudentList.jsx";
import StudentCard from "./StudentCard.jsx";


function CohortList() {
    

    // Holds the all data
    const [selectedCohort, setSelectedCohort] = useState(data);

    
    // Holds cohort semester
    const [season, setSeason] = useState(selectedCohort);

    // creates array of filtered cohort
    let filter = selectedCohort.filter(
        (semester) => semester.cohort.cohortCode === season).map((students)=>{

            return(
                <>
                <StudentCard students={students} />
                </>
            )
        })
        
    //Holds filtered Cohort
    const [filteredCohort, setFilteredCohort] = useState(filter);
 
    let [showComponent, setShowComponent] = useState([])

    let RenderAllStudents = selectedCohort.map((students)=>{

            return(
                <>
             <StudentCard students={students} />
                </>
            )
        })
    
    function AllSeason() {

        setShowComponent(RenderAllStudents)

    }
    function ChangeSeason(e) {
        let space = e.target.innerText.replace(" ", "")

        setSeason(space)

      setShowComponent(filter)
     
        console.log(filter)
        
    }

    return (
        <>
            <div className="cohortList">
                
                <ul>
                    Choose a Class By Start Date
                    <li
                        onClick={() => {

                            AllSeason();
                        }}
                    >
                        All Students
                    </li>
                    <li
                        onClick={(e) => {
                            ChangeSeason(e);
                        }}
                    >
                        Winter 2026
                    </li>
                    <li
                        onClick={(e) => {
                            ChangeSeason(e);
                        }}
                    >
                        Fall 2026
                    </li>
                    <li
                        onClick={(e) => {
                            ChangeSeason(e);
                        }}
                    >
                        Summer 2026
                    </li>
                    <li
                        onClick={(e) => {
                            ChangeSeason(e);
                        }}
                    >
                        Spring 2026
                    </li>
                    <li
                        onClick={(e) => {
                            ChangeSeason(e);
                        }}
                    >
                        Winter 2025
                    </li>
                    <li
                        onClick={(e) => {
                            ChangeSeason(e);
                        }}
                    >
                        Fall 2025
                    </li>
                    <li
                        onClick={(e) => {
                            ChangeSeason(e);
                        }}
                    >
                        Summer 2025
                    </li>
                    <li
                        onClick={(e) => {
                            ChangeSeason(e);
                        }}>Spring 2025
                    </li>
                </ul>
            </div>

            <div className="studentCard">
                {showComponent}

            </div>
        </>
    );
}

export default CohortList;









// import data from "../data/data.json"
// // import StudentList from "./StudentList.jsx"
// import '../Components/CohortList.css'
// import OnTrackStatus from "./OnTrackStatus.jsx"
// import { useState } from "react"
// // import FilteredSeasonCard from "./FilteredSeasonCard.jsx"

// function CohortList(){

//  const [ selectedCohort,setSelectedCohort ] = useState(data);
//  let [ season,setSeason] = useState("Winter2025")

//  //   console.log(selectedCohort.filter((semester)=>semester.cohort.cohortCode === season))

// //  function FilteredSeasonCard(){

// //      const [changeButtonText, setChangeButtonText] = useState("Show More")
// //      const [isButtonPressed, setIsButtonPressed] = useState(true)
// //      const [extraInfo, setExtraInfo] = useState(null)

// //     selectedCohort.filter((semester)=> semester.cohort.cohortCode === season).map((students) => {

// //         let percentage = Math.trunc((students.codewars.current.total / students.codewars.goal.total) * 100)

// //         function symbolForCert(cert) {
// //             if (cert === false) {
// //                 return (<li> ❌ </li>)
// //             }
// //             return (<li> ✅ </li>)
// //         }

// //         function StudentDetail() {

// //             return (
// //                 <div>
// //                     <ul>CodeWars:
// //                         <li>Current Total: {students.codewars.current.total} </li>
// //                         <li>Last Week: {students.codewars.current.lastWeek}</li>
// //                         <li>Goal: {students.codewars.goal.total}</li>
// //                         <li>Percentage of Goal Achieved: {percentage} % </li>
// //                     </ul>
// //                     <ul>Scores:
// //                         <li>{(students.cohort.scores.assignments) * 100} %</li>
// //                         <li>{(students.cohort.scores.projects) * 100} %</li>
// //                         <li>{(students.cohort.scores.assessments) * 100} %</li>
// //                     </ul>
// //                     <ul>Certifications:
// //                         <li>Resume:{symbolForCert(students.certifications.resume)}</li>
// //                         <li>LinkedIn: {symbolForCert(students.certifications.linkedin)}</li>
// //                         <li>Github: {symbolForCert(students.certifications.github)}</li>
// //                         <li>Mock Interview: {symbolForCert(students.certifications.mockInterview)}</li>
// //                     </ul>
// //                 </div>
// //             )
// //         }

// //         //ternary (use semi colon for multiple conditions)or factor ;
// //         function ShowMoreButton() {
// //             if (isButtonPressed === false) {
// //                 setExtraInfo(null)
// //                 setChangeButtonText("Show More")
// //             } else if (isButtonPressed === true) {
// //                 setExtraInfo(StudentDetail())
// //                 setChangeButtonText("Show Less")
// //             }
// //         }

// //         return (
// //             <div key={students.id} id={students.id} className="students">
// //                 <img src={students.profilePhoto} width="90px" height="90px"></img>
// //                 <h2>{students.names.preferredName} {students.names.middleName} {students.names.surname}</h2>
// //                 <h3>{students.username}</h3>
// //                 <h3><span>Birthday: </span>{students.dob}</h3>

// //                 <OnTrackStatus
// //                 className="onTrackStatus"
// //                 data={data}
// //                 students={students} />

// //                 <div className="button">

// //                     <button key={students.id} id={students.id} onClick={(e) => {

// //                         setIsButtonPressed(!isButtonPressed)
// //                         ShowMoreButton()

// //                     }}>{changeButtonText}</button>

// //                 </div>

// //                 <div className='extraInfo'> {extraInfo} </div>

// //             </div>
// //         )
// // })};

//  return(
// <>
// <div className="cohortList">

// <ul>Choose a Class By Start Date

// <li>All Students</li>

// <li onClick={()=>{
//  console.log(selectedCohort.filter((semester)=>semester.cohort.cohortCode === season))
// }}

// >Winter 2026</li>

// <li>Fall 2026</li>

// <li>Summer 2026</li>

// <li>Spring 2026</li>

// <li>Winter 2025</li>

// <li>Fall 2025</li>

// <li>Summer 2025</li>

// <li>Spring 2025</li>

// </ul>

// </div>
// </>

// )

// }

// export default CohortList
