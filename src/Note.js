
import "./Note.css"
const Note = (props) => {
    
    const{title,text} = props;
   
        
  return (
    <div className="note">
    <h4><input placeholder="" name="title" value={title}></input></h4>
    <textarea placeholder="" name="text" value={text} ></textarea> 
    </div>
  )
}

export default Note