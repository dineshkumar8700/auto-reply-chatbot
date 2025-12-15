import { availableGames } from "../data/available_games.js";
import { guessCricketerName } from "../games/guess_cricketer.js";
import { guessTheNumberGame } from "../games/guess_number.js";

const games = {
  1: guessTheNumberGame,
  2: guessCricketerName,
};

const selectGameToPlay = () => {
  console.log("\nFollowing are the games available:");
  availableGames.forEach((game) => {
    console.log(`Id: ${game.id} | Name: ${game.name}`);
  });
  const choice = prompt("\nWhich game do you want to play? (type game id):");
  return choice;
};

export const playGame = () => {
  const selectedGame = selectGameToPlay();
  return games[selectedGame]();
};
