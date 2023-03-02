import NoteForm from "../../components/NoteForm/NoteForm"
import NoteCard from "../../components/NoteCard/NoteCard"

export default function NotesList({ notes }) {

    return (
        <>
        <div>Notes List Page</div>
        <NoteForm />
        <hr />
        <ul>
            {notes.map((note, idx) => (
                <NoteCard note={note} key={idx}/>
            ))}
        </ul>
        </>
    )
}