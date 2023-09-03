import React, { useState } from 'react'
import Color from './Color'
import { nanoid } from 'nanoid'
import   './ColorSelector.css'

const ColorSelector = ({selectColor}) => {
  const [colors] = useState([
  {id:nanoid(),value:"#F24100"},
  {id:nanoid(),value:"#99FF33"},
  {id:nanoid(),value:"#FF9900"},
  {id:nanoid(),value:"#33CCFF"},
  {id:nanoid(),value:"#FFFFFF"},]);
  return (
    <div className='color'>
      {colors.map(color => <Color color={color} selectColor={selectColor} />)}   
    </div>
  )
}

export default ColorSelector