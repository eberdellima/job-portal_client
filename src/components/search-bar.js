import React from "react";
import { InputBase } from '@material-ui/core'
import { Search } from '@material-ui/icons'


export default function SearchBar() {

  return (
    <div className="search">
      <div className="search-icon">
        <Search/>
      </div>
      <InputBase 
        placeholder="Search..."
        className="input-root input-input"
        inputProps={{ 'aria-label':  'search' }}
      />
    </div>
  )
}