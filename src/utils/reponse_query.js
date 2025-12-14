import { tellJoke } from "./tell_joke.js";

const services = {
  joke: tellJoke,
};

export const responseToQuery = (query) => {
  return services[query]();
};
