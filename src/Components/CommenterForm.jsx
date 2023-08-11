import { useState } from "react"
import "../Components/CommenterForm.css";

function CommenterForm({ studentObj }) {


    const [studentNotes, setStudentNotes] = useState(studentObj.notes)
    const [commenterNameForForm, setCommenterNameForForm] = useState("")
    const [commentForForm, setCommentForForm] = useState("")

    // we want to update it with the form :  setStudentNotes(  [ ...studentNotes, newNote ]  )

    const renderStudentNotes = studentNotes.map((eachNote, index) => {

        return (<li key={`note-${index}`}> {eachNote.commenter} says, "{eachNote.comment}" </li>)
    }
    )

    function HandleInput() {
        let newNote = {

            commenter: commenterNameForForm,
            comment: commentForForm
        }
        studentNotes.push(newNote)
    }

    return (
        <div className="forms">

            <h3>1-on1 Notes</h3>

            <form onSubmit={(e) => {
                e.preventDefault();
                HandleInput()
                setStudentNotes([...studentNotes])
                setCommentForForm("")
                setCommenterNameForForm("")
            }}>

                <label> Commenter Name
                    <input type="text" value={commenterNameForForm} onChange={(e) => { setCommenterNameForForm(e.target.value) }} />
                </label>
                <label>Comment
                    <input type="text" value={commentForForm} onChange={(e) => { setCommentForForm(e.target.value) }} />
                </label>
                <label>
                    <input className="submitButton" type="submit" />
                </label>
            </form>


            <hr />

            <div>
                {renderStudentNotes}
            </div>

        </div>

    )
}

export default CommenterForm