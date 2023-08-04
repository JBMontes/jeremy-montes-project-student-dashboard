import { useState } from "react";
import "../Components/StudentList.css"
import data from "../data/data.json"
import OnTrackStatus from "./OnTrackStatus.jsx";
// import AdditionalDetails from "./AdditionalDetails.jsx";


function StudentList() {


    function symbolForCert(cert) {
        if (cert === false) {
            return (<li> ❌ </li>)
        }
        return (<li> ✅ </li>)
    }

    return (
        
        <div className="studentList">

            {data.map((students) => {

                let percentage = Math.trunc((students.codewars.current.total / students.codewars.goal.total) * 100)

                function StudentDetail() {

                    return (
                        <div>
                            <ul>CodeWars:
                                <li>Current Total: {students.codewars.current.total} </li>
                                <li>Last Week: {students.codewars.current.lastWeek}</li>
                                <li>Goal: {students.codewars.goal.total}</li>
                                <li>Percentage of Goal Achieved: {percentage} % </li>
                            </ul>
                            <ul>Scores:
                                <li>{(students.cohort.scores.assignments) * 100} %</li>
                                <li>{(students.cohort.scores.projects) * 100} %</li>
                                <li>{(students.cohort.scores.assessments) * 100} %</li>
                            </ul>
                            <ul>Certifications

                                <li>Resume:{symbolForCert(students.certifications.resume)}</li>
                                <li>LinkedIn: {symbolForCert(students.certifications.linkedin)}</li>
                                <li>Github: {symbolForCert(students.certifications.github)}</li>
                                <li>Mock Interview: {symbolForCert(students.certifications.mockInterview)}</li>
                            </ul>
                        </div>
                    )
                }

                const [changeButtonText, setChangeButtonText] = useState("Show More")
                const [isButtonPressed, setIsButtonPressed] = useState(true)
                const [extraInfo, setExtraInfo] = useState(null)

                //ternary (use semi colon for multiple conditions)or factor ; 
                function ShowMoreButton() {
                    if (isButtonPressed === false) {
                        setExtraInfo(null)
                        setChangeButtonText("Show More")
                    } else if (isButtonPressed === true) {
                        setExtraInfo(StudentDetail())
                        setChangeButtonText("Show Less")
                    }
                }

                return (
                    <div key={students.id} id={students.id} className="students">
                        <img src={students.profilePhoto} width="90px" height="90px"></img>
                        <h2>{students.names.preferredName} {students.names.middleName} {students.names.surname}</h2>
                        <h3>{students.username}</h3>
                        <h3><span>Birthday: </span>{students.dob}</h3>

                        <OnTrackStatus 
                        className="onTrackStatus"
                            data={data}
                            students={students} />

                        <div className="button">

                            <button key={students.id} id={students.id} onClick={(e) => {

                                setIsButtonPressed(!isButtonPressed)
                                ShowMoreButton()

                            }}>{changeButtonText}</button>

                        </div>

                        <div className='extraInfo'> {extraInfo} </div>

                    </div>
                )
            })}

        </div>
    )
}


export default StudentList










// const [changeButtonText, setChangeButtonText] = useState("Show More")
// const [isButtonPressed, setIsButtonPressed] = useState(false)


// function ShowMoreButton() {
//     if (isButtonPressed === false) {
//         setChangeButtonText("Show Less")
//     } else {
//         setChangeButtonText("Show More")
//     }
// }