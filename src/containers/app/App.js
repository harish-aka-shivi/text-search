import React from 'react';
import useSearch from '../../hooks/useSearch';
import './App.css';

const SearchBar = ({handleInput}) => (
    <input placeholder="Type your keyword here" className="Search-bar" type="text" onInput={handleInput} />
)

const ListItem = ({ text }) => (
  <li className="List-item">{text}</li>
)

const List = ({ sentences }) => (
  <ul className="List">
    {
      sentences.map(sentence => (
        <ListItem text={sentence.data} key={sentence.id}></ListItem>
      ))
    }
  </ul>
);

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
