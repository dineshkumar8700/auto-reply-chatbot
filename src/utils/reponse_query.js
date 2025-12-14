import { tellJoke } from "./tell_joke.js";
import { newWord } from "./new_word.js";

const services = {
  joke: tellJoke,
  word: newWord,
};

export const responseToQuery = (query) => {
  return services[query]();
};
