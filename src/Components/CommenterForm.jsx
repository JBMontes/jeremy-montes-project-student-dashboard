import { useState } from "react"

function CommenterForm({studentObj}){

    
    // const [commenterNameForForm, setCommenterNameForForm] = useState("")

    const [studentNotes, setStudentNotes] = useState(studentObj.notes)
    // we want to update it with the form :  setStudentNotes(  [ ...studentNotes, newNote ]  )

    const renderStudentNotes = studentNotes.map( (eachNote, index) => {
        // console.log(eachNote)
        return( <li key={`note-${index}`}> {eachNote.commenter} says, "{eachNote.comment}" </li> )
    }
    )

    return(
        <>

        <label>1-on-1 Notes


        <form> 
       
        <label> Commenter Name
        <input type="text" />
        </label>
        <label>Comment
        <input type="text" />
        </label>
        <label>
        <input type="submit" />
        </label>
        </form>
        </label>

        <hr/>

            <div>
                {renderStudentNotes}
            </div>
    
        </>
     
    )
}

export default CommenterForm