import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import "./Note.css"
import "./CreateNote.css"
const CreateNote = ({addNote}) => {
    const [data,setData] = useState({title:"",text:""});
    const save = (event)=>{
        console.log(data);
        data.id = nanoid();
        addNote(data);
        setData({title:"",text:""});
    }
    const updateData = (event)=>
    {
        let newData = {...data};
        newData[event.target.name] = event.target.value;
        setData(newData);
    }
        
    return (
        <div className="note createNote">
        <h4><input placeholder="Note title..." name="title" value={data.title} onChange={updateData}></input></h4>
        <textarea placeholder="Enter your note text here" name="text"value={data.text} onChange={updateData}></textarea>
         <button onClick={save}>createNote</button> 
        </div>
      )
    
  
}

export default CreateNote