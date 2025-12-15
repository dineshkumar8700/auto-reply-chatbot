import { tellJoke } from "./tell_joke.js";
import { newWord } from "./new_word.js";
import { botFeatures } from "./features.js";
import { noMatch } from "./no_match.js";
import { playGame } from "./play_game.js";

const services = {
  joke: tellJoke,
  word: newWord,
  "--help": botFeatures,
  noMatch: noMatch,
  game: playGame,
};

export const responseToQuery = (query) => {
  return services[query]();
};
