import data from "../data/data.json";
import { useState } from "react";
import "../Components/CohortList.css";
import StudentCard from "./StudentCard.jsx";
import Form from "./CommenterForm.jsx";
import CommenterForm from "./CommenterForm.jsx";

function CohortList() {

    //Holds Student Cohort
    const [cohortYear, setCohortYear] = useState("All Students")

    const [filteredCohortStudents, setFilteredCohortStudents] = useState(data)

    // Holds cohort semester
    const [season, setSeason] = useState(filteredCohortStudents);

    let RenderAllStudents = data.map((students) => { return (<><StudentCard students={students} /></>) })

    //Holds StudentCard Component in div tag
    let [showComponent, setShowComponent] = useState(RenderAllStudents)

    //Renders All Students,Cohort Year, and student count
    function AllSeason(e) {
        setCohortYear(e.target.innerText)
        setShowComponent(RenderAllStudents)
        setStudentAmount(RenderAllStudents.length)
    }

    function handleCohortClick(e) {

        // did you click on all students : bring everyone back
        if (e.target.innerText === "All Students") setFilteredCohortStudents(data) // everyone shows up

        let space = e.target.innerText.replace(" ", "")

        const filter = data.filter((student) => student.cohort.cohortCode === space).map((students) => { return (<><StudentCard students={students} /></>) })

        setFilteredCohortStudents(filter)
        setCohortYear(e.target.innerText)
        setShowComponent(filter)
        setStudentAmount(filter.length)
    }

    //Holds student attendance
    const [studentAmount, setStudentAmount] = useState(RenderAllStudents.length)


    return (
        <>
            <div className="cohortList">

                <ul>
                    Choose a Class By Start Date
                    <li
                        onClick={(e) => {


                            AllSeason(e)

                        }}
                    >
                        All Students
                    </li>
                    <li
                        onClick={(e) => {
                            handleCohortClick(e);
                        }}
                    >
                        Winter 2026
                    </li>
                    <li
                        onClick={(e) => {
                            handleCohortClick(e);
                        }}
                    >
                        Fall 2026
                    </li>
                    <li
                        onClick={(e) => {
                            handleCohortClick(e);
                        }}
                    >
                        Summer 2026
                    </li>
                    <li
                        onClick={(e) => {
                            handleCohortClick(e);
                        }}
                    >
                        Spring 2026
                    </li>
                    <li
                        onClick={(e) => {
                            handleCohortClick(e);
                        }}
                    >
                        Winter 2025
                    </li>
                    <li
                        onClick={(e) => {
                            handleCohortClick(e);
                        }}
                    >
                        Fall 2025
                    </li>
                    <li
                        onClick={(e) => {
                            handleCohortClick(e);
                        }}
                    >
                        Summer 2025
                    </li>
                    <li
                        onClick={(e) => {
                            handleCohortClick(e);
                        }}>
                        Spring 2025
                    </li>
                </ul>

                <div className="studentCard">

                    <div className="studentCount"> {cohortYear} <br />Total Students: {studentAmount} </div>

                    {/* Rendering Student Cards */}
                    {showComponent}


                </div>
            </div>

        </>
    );
}

export default CohortList;








