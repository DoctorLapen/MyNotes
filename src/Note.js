
import "./Note.css"
import DeleteButton from "./DeleteButton.js";
import { useState } from "react";
const Note = (props) => {
    
    const{data,edit,deleteNote} = props;
    const[isPointerOver,setPointerOver] = useState(false);
    
    const editValue = (event)=>
    {
       data[event.target.name] = event.target.value;
       edit(data);
    }
        
  return (
    <div className="note" style={{backgroundColor: data.color}}  onMouseEnter={(e)=> setPointerOver(true)} onMouseLeave={(e)=> setPointerOver(false)}>
      <div className="title">
      <input placeholder="" name="title" value={data.title} onChange={editValue}></input>
      {isPointerOver && <DeleteButton onClick={(e)=> deleteNote(data.id)}/>}
      </div>
    <textarea placeholder="" name="text" value={data.text} onChange={editValue}></textarea>     
    </div>
  )
}

export default Note