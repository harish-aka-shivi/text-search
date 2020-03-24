import searchAlgorithm from '../util/searchAlgorithm';
import sentences from '../data/sentences.json';

describe('Search Algorithm test', () => {
  it('should return an array', () => {
    const list = searchAlgorithm('');
    expect(Array.isArray(list)).toBe(true);
  });

  it('should work when there is no input', () => {
    expect(searchAlgorithm('')).toHaveLength(sentences.length);
  });

  it('should return 1 element when huh is given as input. It is first element in data', () => {
    expect(searchAlgorithm('huh')).toHaveLength(1);
  })

})