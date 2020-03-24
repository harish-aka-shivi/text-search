import React from 'react';
import ListItem from './listItem'

const SentencesList = ({ sentences }) => (
  <ul className="List">
    {
      sentences.map(sentence => (
        <ListItem text={sentence.data} key={sentence.id}></ListItem>
      ))
    }
  </ul>
);

export default SentencesList;
