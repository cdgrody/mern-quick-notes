import './NoteForm.css'

export default function NoteForm() {
    return (
        <>
            <h2>New Note</h2>
            <form className="note-form">
                <input className="add-note-text" placeholder="Write note here..."></input>
                <button className="add-note-button" type="submit">Add Note</button>
            </form>
            <hr></hr>
            <h2>Previous Notes</h2>
            
        </>
    )
}