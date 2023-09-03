
import "./NoteSpace.css"
import Note from './Note'

const NoteSpace = ({notes,editNote,deleteNote}) => {
 
   
  console.log(notes);
  return (
   
    <div className='noteSpace'> 
    {
    
      notes.map((note)=><Note data= {note} edit = {editNote} deleteNote ={deleteNote}/>)
     }
    </div>
    
  )
}

export default NoteSpace