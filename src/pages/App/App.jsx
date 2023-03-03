import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { getNotes } from '../../utilities/notes-service'
import AuthPage from '../AuthPage/AuthPage';
import NotesList from '../NotesList/NotesList'
import NavBar from '../../components/NavBar/NavBar'


export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [ notes, setNotes ] = useState([])

  useEffect(() => {
    async function fetchNotes() {
      const notes = await getNotes(user._id);
      setNotes(notes)
    }
    if (user) {
      fetchNotes();
    }
  }, [user])

  function handleNoteAdded(newNote) {
    setNotes(notes => [...notes, newNote]);
  }

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes notes={notes}>
            <Route path="" element={<NotesList notes={notes} user={user} handleNoteAdded={handleNoteAdded}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}  />
      }
    </main>
  );
}

