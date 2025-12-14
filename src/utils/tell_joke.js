import { jokes } from "../data/jokes.js";
let i = 0;

export const tellJoke = () => {
  const question = jokes[i].question;
  const answer = jokes[i++].answer;
  const joke = `Question: ${question} \nAnswer: ${answer}`;

  return joke;
};
