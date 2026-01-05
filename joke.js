const URL = "http://www.official-joke-api.appspot.com/random_joke";

const formatJoke = (joke) => {
  const category = "category: " + joke["type"];
  const setup = joke["setup"];
  const punchline = joke["punchline"];

  return `${category}\n${setup}\n${punchline}`;
};

const fetchJoke = async () => {
  const response = await fetch(URL);
  const json = await response.json();

  return formatJoke(json);
};

export const tellJoke = async () => {
  const joke = await fetchJoke();
  return joke;
};
