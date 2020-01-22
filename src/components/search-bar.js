import React from "react";
import { InputBase, Button } from '@material-ui/core'
import { Search, ArrowRightAlt } from '@material-ui/icons'


export default function SearchBar({searchTerm, searchTermHandler, search}) {

  const handleInputChange = (event) => {
    const term = event.target.value
    return searchTermHandler(term)
  }

  return (
    <div className="search">
      <div className="search-icon">
        <Search/>
      </div>
      <InputBase
        value={searchTerm} 
        placeholder="Search..."
        className="input-root input-input"
        inputProps={{ 'aria-label':  'search' }}
        onChange={handleInputChange}
      />
      <Button variant="outlined" color="secondary" size="medium" onClick={search}>
        <ArrowRightAlt/>
      </Button>
    </div>
  )
}