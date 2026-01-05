import { processQuery } from "./process_query.js";
import { responseToQuery } from "./reponse_query.js";

export const startBot = async (name) => {
  let query = prompt(`${name} how I can help you today 👀..?`);

  while (query !== "exit") {
    const processedQuery = processQuery(query);
    const response = await responseToQuery(processedQuery, query);
    console.log(response || "Hope you enjoyed 😃");
    query = prompt(`\n${name} what else I can help you with 👀..?`);
  }
};
