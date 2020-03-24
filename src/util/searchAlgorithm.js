import originalSentences from '../data/sentences.json';

const searchAlgorithm = (keyword) => originalSentences.filter(sentence => sentence.data.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);

export default searchAlgorithm;
