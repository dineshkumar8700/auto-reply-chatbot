import { clearScreen } from "../utils/clear_screen.js";

export const welcomeMessage = () => {
  clearScreen();
  const userName = prompt("Hi, enter your name to start:");
  console.log(`👋 Welcome ${userName}😃! Type 'help' to see what I can do.`);
  return userName;
};
