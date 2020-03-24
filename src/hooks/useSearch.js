import { useState } from 'react';
import searchAlgorithm from '../util/searchAlgorithm';
import originalSentences from '../data/sentences.json';

const useSearch = () => {
  const [filteredList, setFilteredList] = useState(originalSentences);
  
  const searchKeyword = (value) => {
    const searchList = searchAlgorithm(value);
    setFilteredList(searchList)
  }

  return [filteredList, searchKeyword]
}

export default useSearch;
