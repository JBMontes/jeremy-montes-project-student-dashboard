import data from "../data/data.json";
import { useState } from "react";
import "../Components/CohortList.css";
import StudentCard from "./StudentCard.jsx";


function CohortList() {

    //Holds Student Cohort
    const [cohortYear, setCohortYear] = useState("All Students")

    // Holds the all data
    const [selectedCohort, setSelectedCohort] = useState(data);

    let totalAllStudents = selectedCohort.length

    //Holds Amount of student
    const [studentAmount, setStudentAmount] = useState(totalAllStudents)

    // Holds cohort semester
    const [season, setSeason] = useState(selectedCohort);

    // creates array of filtered cohort
    let filter = selectedCohort.filter(
        (semester) => semester.cohort.cohortCode === season).map((students) => {

            return (
                <>
                    <StudentCard students={students} />
                </>
            )
        })

    let RenderAllStudents = selectedCohort.map((students) => { return (<><StudentCard students={students} /></>) })

    //Holds Component in div tag
    let [showComponent, setShowComponent] = useState(RenderAllStudents)


    //Shows All Students
    function AllSeason(e) {

        setCohortYear(e.target.innerText)
        setShowComponent(RenderAllStudents)
        setStudentAmount(totalAllStudents)

    }
    //Shows Students depending on their cohort year
    function ChangeSeason(e) {
        let space = e.target.innerText.replace(" ", "")

        setCohortYear(e.target.innerText)

        setSeason(space)

        setShowComponent(filter)

        setStudentAmount(filter.length)

    }

    return (
        <>
            <div className="cohortList">

                <ul>
                    Choose a Class By Start Date
                    <li
                        onClick={(e) => {

                            AllSeason(e);
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
                        }}>
                        Spring 2025
                    </li>
                </ul>

                <div className="studentCard">

                    <div className="studentCount"> {cohortYear} <br />Total Students: {studentAmount} </div>

                    {showComponent}
                </div>
            </div>

        </>
    );
}

export default CohortList;








