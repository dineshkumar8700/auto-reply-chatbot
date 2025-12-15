import { availableGames } from "../data/available_games.js";
import { guessTheNumberGame } from "../games/guess_number.js";

const games = {
  1: guessTheNumberGame,
};

const selectGameToPlay = () => {
  console.log("Following are the games available:");
  availableGames.forEach((game) => {
    console.log(`Id: ${game.id} | Name: ${game.name}`);
  });
  const choice = prompt("Which game do you want to play? (type game id)");
  return choice;
};

export const playGame = () => {
  const selectedGame = selectGameToPlay();
  return games[selectedGame]();
};
