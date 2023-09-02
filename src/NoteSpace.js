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
   
  console.log(notes);
  return (
    <div>
    <CreateNote addNote={addNote}/>
    <div className='noteSpace'> 
    {
    
      notes.map((note)=><Note data= {note} edit = {editNote} deleteNote ={deleteNote}/>)
     }
    </div>
    </div>
  )
}

export default NoteSpace