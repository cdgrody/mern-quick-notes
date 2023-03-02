import NoteForm from "../../components/NoteForm/NoteForm"
import NoteCard from "../../components/NoteCard/NoteCard"

export default function NotesList({ note }) {

    return (
        <>
        <div>Notes List Page</div>
        <NoteForm />
        <hr />
        <NoteCard />
        </>
    )
}