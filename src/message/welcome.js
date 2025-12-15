import { clearScreen } from "../utils/clear_screen.js";

export const welcomeMessage = () => {
  const userName = prompt("Hi, enter your name to start:");
  clearScreen();
  console.log(`👋 Welcome ${userName}😃! Type 'help' to see what I can do.`);
  return userName;
};
