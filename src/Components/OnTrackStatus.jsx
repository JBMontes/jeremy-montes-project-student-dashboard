function OnTrackStatus({ students }) {
    {
        if ((students.certifications.github &&
            students.certifications.linkedin &&
            students.certifications.mockInterview &&
            students.certifications.resume === true) &&
            (students.codewars.current.total > 600)) {
            return (
                <h3><span> On-Track To Graduate</span></h3>
            )
        } else {
            return (
                <h3><span> Off-Track To Graduate</span></h3>
            )
        }
    }
}

export default OnTrackStatus