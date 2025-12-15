export const processQuery = (query) => {
  const request = query.toLowerCase();
  switch (true) {
    case request.includes("joke"):
      return "joke";
    case request.includes("word"):
      return "word";
    case request.includes("help"):
      return "--help";
    case request.includes("game"):
      return "game";
    default:
      return "noMatch";
  }
};
