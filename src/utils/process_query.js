import { responseToQuery } from "./reponse_query.js";

export const processQuery = (query) => {
  if (query.includes("joke")) {
    return responseToQuery("joke");
  }

  if (query.includes("word")) {
    return responseToQuery("word");
  }

  if (query === "help") {
    return responseToQuery("help");
  }

  return "Oops!😬 Nothing matched to your query. try again.";
};
