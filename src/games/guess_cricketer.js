import { cricketers, hints } from "../data/cricketer.js";

const generateRandomNumber = () => Math.floor(Math.random() * 50);

const getRandomCricketer = () => {
  return cricketers[generateRandomNumber()];
};

const displayHints = () => {
  const message = "Choose you hint from below optinos (Enter hint number)";
  const hints =
    "\n1 Country\n2 IPL Team\n3 Player Role\n4 Batting Hand\n5 Bowling Hand";
  const choice = "\nYour Choice:";

  return message + hints + choice;
};

const guessName = (player) => {
  for (let chances = 0; chances < 3; chances++) {
    const choice = parseInt(prompt(displayHints()));
    console.log(player[hints[choice]]);
    const guess = prompt("Guess the name:");

    if (guess === player.name) {
      console.log("That's the correct answer 🎉");
      return;
    }
    if (chances !== 2) {
      console.log("That's not correct answer. Try again\n");
    }
  }
  console.log("\nOops you loose 🙂");
  console.log(`Correct Name is: ${player.name}\n`);
};

const startGame = (name) => {
  const player = getRandomCricketer();
  guessName(player);
};

const getUserName = () => {
  console.log("Welcome to Guess The Cricketer Name");
  const name = prompt("Enter you name to start:");
  console.log(
    `\n\nAll right %c${name.toUpperCase()}%c. Let's start the game\n`,
    "color:green",
    "color:#fff",
  );

  return name;
};

const playAgain = () => {
  startGame(name);
  const choice = confirm("Do you want to play again? 😃");
  console.clear();

  return choice;
};

export const guessCricketerName = () => {
  const name = getUserName();
  let choice = playAgain();

  while (choice) {
    choice = playAgain();
  }

  return `Well played, ${name.toUpperCase()}`;
};
