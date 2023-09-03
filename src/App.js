import React from 'react'
import NoteSpace from "./NoteSpace"
import { useEffect, useState } from 'react'
import "./NoteSpace.css"
import CreateNote from './CreateNote';
const App = () => {
  const [isFirstRender,SetFirstRender] = useState(true);
  const [notes,setNotes] = useState([]);
  useEffect(() => {
   
  
		const savedNotes = JSON.parse(
			window.localStorage.getItem('react-notes-app-data')
		);
    
		if (savedNotes) {
     
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
    if(isFirstRender){
      SetFirstRender(false);
      return;
    }
  
		window.localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)

		);
	}, [notes]);

  const addNote = (newNote)=>{
    
    setNotes([newNote,...notes]);
  }
  const editNote = (newNote)=>{
    let newNotes = [...notes];
    let noteIndex = newNotes.findIndex((element)=> element.id ==newNote.id);
    console.log(`noteIndex ${noteIndex}`);
    newNotes[noteIndex] = newNote;
    setNotes(newNotes);
  }
  const deleteNote = (id)=>{
    let newNotes = notes.filter((note)=> note.id != id);
    setNotes(newNotes);
  }
   
 
  return (
    <main>
      <CreateNote addNote={addNote}/>
      <NoteSpace notes={notes} editNote={editNote} deleteNote={deleteNote}/>
    </main>
  )
}

export default App