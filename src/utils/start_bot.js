import { processQuery } from "./process_query.js";
import { responseToQuery } from "./reponse_query.js";

export const startBot = (name) => {
  let query = prompt(`${name} how I can help you today 👀..?`);

  while (true) {
    const processedQuery = processQuery(query);
    const response = responseToQuery(processedQuery);
    console.log(response);
    prompt("\nHope you like the response 🤓");
    query = prompt(`${name} what else I can help you with 👀..?`);
  }
};
