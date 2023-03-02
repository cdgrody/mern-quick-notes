export default function NoteCard({ note, idx }) {
    return (
        <li>
            {note.text}, {note.createdAt}
        </li>
    )
}