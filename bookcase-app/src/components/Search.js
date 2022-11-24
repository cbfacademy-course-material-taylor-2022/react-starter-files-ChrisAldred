import React from 'react';

const Search = (props) => {
  const handleSubmit = (event) =>{
      event.preventDefault();
      props.findBooks(props.keyword);
  };

  return <form onSubmit={handleSubmit}>
        <label>
            <input 
              type="text" 
              placeholder="Enter search term" 
              name="search" 
              value={props.keyword} 
              onChange={(e) => props.setKeyword(e.target.value)}/>
        </label>
        <input type="submit" value="Find"/>
      </form>;
}

export default Search;