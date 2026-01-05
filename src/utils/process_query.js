export const processQuery = (query) => {
  const request = query.toLowerCase();
  switch (true) {
    case request.includes("joke"):
      return "joke";
    case request.includes("word") || request.includes("vocabulary"):
      return "word";
    case request.includes("help"):
      return "--help";
    case request.includes("game"):
      return "game";
    case request.includes("calculate"):
      return "calculate";
    default:
      return "noMatch";
  }
};

// const services = ["joke", "word", "noMatch", "game", "help"];

// const calculatePercentage = (match, maxMatch) => {
//   const percentage = Math.floor((match / maxMatch) * 100);
//   return percentage;
// };

// const findNoOfMatches = (query) => {
//   const frequency = {};

//   services.map((task) => {
//     let matches = 0;
//     for (let index = 0; index < query.length; index++) {
//       if (task.includes(query[index])) matches++;
//     }
//     const percentage = calculatePercentage(matches, query.length);
//     frequency[task] = percentage;
//   });

//   return frequency;
// };

// const findMaxPercentageService = (frequency) => {
//   const maxFreq = { service: "", percentage: 0 };
//   for (const key of Object.keys(frequency)) {
//     if (frequency[key] > maxFreq.percentage) {
//       maxFreq.percentage = frequency[key];
//       maxFreq.service = key;
//     }
//   }

//   return maxFreq.service;
// };

// export const processQuery = (query) => {
//   const percentageFrequency = findNoOfMatches(query);
//   const task = findMaxPercentageService(percentageFrequency);
//   return task;
// };
