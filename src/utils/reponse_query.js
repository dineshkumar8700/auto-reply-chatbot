import { tellJoke } from "../services/tell_joke.js";
import { newWord } from "../services/new_word.js";
import { botFeatures } from "../services/features.js";
import { noMatch } from "../services/no_match.js";
import { playGame } from "../services/play_game.js";

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

