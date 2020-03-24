import React from 'react';
import useSearch from '../../hooks/useSearch';
import List from '../../components/SentenceList';
import SearchBar from '../../components/SearchBar';
import './App.css';

const App = () => {
  const [filteredList, searchKeyword] = useSearch();

  const handleInput = (event) => {
   searchKeyword(event.target.value);
  }

  return(
    <main>
      <div className="App-root" role="presentation">
        <SearchBar handleInput={handleInput}></SearchBar>
        <List sentences={filteredList}></List>
      </div>
      
    </main>
  )
}

export default App;
