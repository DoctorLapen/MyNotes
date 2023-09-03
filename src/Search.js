import React from 'react'
import "./Search.css"
const Search = ({search}) => {
  return (
    <input className='search' name="search" placeholder='Search' onChange={(e)=> search(e.target.value) }/>
  )
}

export default Search