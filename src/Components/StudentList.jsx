import { useState } from "react";
import "../Components/StudentList.css"
// import OnTrackStatus from "./OnTrackStatus.jsx";
import StudentCard from "./StudentCard.jsx";

function StudentList({filteredCohort}) {


    // const [changeButtonText, setChangeButtonText] = useState("Show More")
    // const [isButtonPressed, setIsButtonPressed] = useState(true)
    // const [extraInfo, setExtraInfo] = useState(null)
    
    // function ShowMoreButton() {
    //     if (isButtonPressed === false) {
    //         setExtraInfo(null)
    //         setChangeButtonText("Show More")
    //     } else if (isButtonPressed === true) {
    //         setExtraInfo(StudentDetail())
    //         setChangeButtonText("Show Less")
    //     }
    // }
    
            {filteredCohort.map((students) => {

                return (
                    <>
                    <StudentCard students={students} />
                    </>
                )
            })}

       
     
}


export default StudentList









