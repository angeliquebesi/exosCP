import dictionnaire from '../data/dictionnaire.json';

export interface Word {
  nom: string;
  genre: 'masculin' | 'féminin';
  nombre: 'singulier' | 'pluriel';
}

export type Condition = 'genre' | 'nombre';

export default function getRandomWord(excluded?: Word, condition?: Condition): Word {
  if (excluded && !condition) {
    throw new Error("Condition is required when 'excluded' is provided.");
  }

  const filteredWords = dictionnaire.filter(word => {
    if (excluded && condition) {
      return word[condition] !== excluded[condition];
    }
    return true;
  });

  if (filteredWords.length === 0) {
    throw new Error('No valid word found in the dictionary.');
  }

  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex] as Word;
}
