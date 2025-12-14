import { processQuery } from "./process_query.js";

export const startBot = (name) => {
  let query = prompt(`${name} how I can help you today 👀..?`);

  while (true) {
    const response = processQuery(query);
    console.log(response);
    prompt("Hope you like the response 🤓");
    query = prompt(`${name} what else I can help you with 👀..?`);
  }
};
