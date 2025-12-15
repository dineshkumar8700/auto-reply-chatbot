import { dictionary } from "../data/words.js";
let i = 0;

export const newWord = () => {
  const word = dictionary[i].word;
  const meaning = dictionary[i++].meaning;
  const wordMeaning = `Word: ${word} \nMeaning: ${meaning}`;

  return wordMeaning;
};
