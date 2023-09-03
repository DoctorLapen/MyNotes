import React from 'react'
import "./Color.css"
const Color = ({color,selectColor}) => {
  return (
    <div >
    <label htmlFor={color.id} style={{backgroundColor: color.value}}></label>
    <input type="radio" name="color" value={color.value} id={color.id} onChange={(e=>selectColor(e))}/>
    </div>
  )
}

export default Color