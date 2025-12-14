import { responseToQuery } from "./reponse_query.js";

export const processQuery = (query) => {
  if (query.includes("joke")) {
    return responseToQuery("joke");
  }

  if (query.includes("word")) {
    return responseToQuery("word");
  }

  return "Oops!😬 Nothing matched to your query. try again.";
};
