import { tellJoke } from "./tell_joke.js";
import { newWord } from "./new_word.js";
import { botFeatures } from "./features.js";

const services = {
  joke: tellJoke,
  word: newWord,
  help: botFeatures,
};

export const responseToQuery = (query) => {
  return services[query]();
};
