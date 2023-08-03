function OnTrackStatus({ data, students }) {

    {
        if ((students.certifications.github &&
            students.certifications.linkedin &&
            students.certifications.mockInterview &&
             students.certifications.resume === true) &&
            (students.codewars.current.total > 600)) {
            return (
                <h3><span> On-Track</span></h3>
            )
        } else {
            return (
                <h3><span> Off-Track</span></h3>
            )
        }
    }
}
export default OnTrackStatus