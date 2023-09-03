
import "./Note.css"
const Note = (props) => {
    
    const{data,edit,deleteNote} = props;
    
    const editValue = (event)=>
    {
       data[event.target.name] = event.target.value;
       edit(data);
    }
        
  return (
    <div className="note" style={{backgroundColor: data.color}}>
    <h4><input placeholder="" name="title" value={data.title} onChange={editValue}></input></h4>
    <textarea placeholder="" name="text" value={data.text} onChange={editValue}></textarea> 
    <button onClick={(e)=> deleteNote(data.id)}>delete</button>
    </div>
  )
}

export default Note