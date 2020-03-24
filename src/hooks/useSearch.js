import { useState } from 'react';
import originalSentences from '../data/sentences.json';

const searchAlgorithm = (keyword) => originalSentences.filter(sentence => sentence.data.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)

const useSearch = () => {
  const [filteredList, setFilteredList] = useState(originalSentences);
  
  const searchKeyword = (value) => {
    const searchList = searchAlgorithm(value);
    setFilteredList(searchList)
  }

  return [filteredList, searchKeyword]
}

export default useSearch;
