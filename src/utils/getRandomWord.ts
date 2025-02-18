import dictionnaire from '../data/dictionnaire.json';

export interface Word {
  nom: string;
  genre: string;
  nombre: string;
}

export const getRandomWord = (excluded?: Word): Word => {
  let randomWord: Word;
  do {
    const randomIndex = Math.floor(Math.random() * dictionnaire.length);
    randomWord = dictionnaire[randomIndex];
  } 
  while (randomWord.genre === excluded?.genre);

  return randomWord;
}
