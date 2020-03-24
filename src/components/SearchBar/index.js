import React from 'react';

const SearchBar = ({handleInput}) => (
  <input placeholder="Type your keyword here" className="Search-bar" type="text" onInput={handleInput} />
);

export default SearchBar;
