export default function NoteCard({ note, idx }) {
    return (
        <li>
            {note.text}, {note.createdAt}
            ?
            {note.user === 4}
        </li>
    )
}