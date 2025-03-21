import { expect, test } from 'vitest'
import getRandomWord from '../utils/getRandomWord'

test('getRandomWord returns a word different to first word in function to genre ', () => {
  const firstWord = { nom: 'test', genre: 'masculin', nombre: 'singulier' }
  const secondWord = getRandomWord(firstWord)
  expect(secondWord.genre).not.toBe(firstWord.genre)
})

test('getRandomWord returns a word with a genre', () => {
  const word = getRandomWord()
  expect(word.genre).toBeDefined()
})

test('getRandomWord returns a word with a nombre different', () => {
  const firstWord = { nom: 'test', genre: 'masculin', nombre: 'singulier' }
  const secondWord = getRandomWord(firstWord, 'nombre')
  expect(secondWord.nombre).not.toBe(firstWord.nombre)
});
