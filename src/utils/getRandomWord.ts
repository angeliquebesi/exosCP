import dictionnaire from '../data/dictionnaire.json';

export interface Word {
  nom: string;
  genre: string;
  nombre: string;
}

type Condition= 'genre' | 'nombre';

export default function getRandomWord(excluded?: Word, condition?: Condition): Word {
  let randomWord: Word;
  do {
    const randomIndex = Math.floor(Math.random() * dictionnaire.length);
    randomWord = dictionnaire[randomIndex];
  } 
  while (condition && randomWord[condition] === excluded?.[condition]);

  return randomWord;
}
