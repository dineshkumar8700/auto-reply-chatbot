import { welcomeMessage } from "./message/welcome.js";
import { startBot } from "./utils/start_bot.js";

const main = () => {
  const userName = welcomeMessage();
  startBot(userName);
};

main();
