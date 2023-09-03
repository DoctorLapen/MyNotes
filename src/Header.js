import React from 'react'
import Search from "./Search.js"
import "./Header.css"
const Header = ({search}) => {
  return (
    <header className="header">
        <h1>MyNotes</h1>
         <Search search={search} />
    </header>
  )
}

export default Header