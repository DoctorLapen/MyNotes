import React, { useEffect, useState } from 'react'
import "./NoteSpace.css"
import Note from './Note'
import CreateNote from './CreateNote';
const NoteSpace = () => {
  const [isFirstRender,SetFirstRender] = useState(true);
  const [notes,setNotes] = useState([]);
  useEffect(() => {
   
  
		const savedNotes = JSON.parse(
			window.localStorage.getItem('react-notes-app-data')
		);
console.log(savedNotes);
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
    let noteIndex = notes.findIndex((element)=> element.id ==newNote.id);
    notes[noteIndex] = newNote;
    setNotes(notes);
  }
  console.log(notes);
  return (
    <div>
    <CreateNote addNote={addNote}/>
    <div className='noteSpace'> 
    {
     
      notes.map((note)=><Note text={note.text}  title={note.title} />)
     }
    </div>
    </div>
  )
}

export default NoteSpace