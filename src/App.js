import React, { useState } from 'react';
import originalSentences from './sentences.json';
import './App.css';

const SearchBar = ({handleInput}) => (
    <input placeholder="Type your keyword here" className="Search-bar" type="search" onInput={handleInput} />
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

const searchAlgorithm = (keyword) => originalSentences.filter(sentence => sentence.data.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)


const App = () => {
  const [filteredList, setFilteredList] = useState(originalSentences);

  const handleInput = (event) => {
    const searchList = searchAlgorithm(event.target.value);
    setFilteredList(searchList)
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
