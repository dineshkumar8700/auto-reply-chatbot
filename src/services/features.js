import { features } from "../data/features.js";

const generateStructure = () => {
  const header = `${"-".repeat(80)}\n`;
  const body = `| ${"Feature".padEnd(25)} | ${"Example".padEnd(35)} | ${
    "Is Active".padEnd(10)
  } |\n`;
  const footer = `${"-".repeat(80)}`;

  return header + body + footer;
};

const showFeatures = () => {
  console.log(generateStructure());
  features.forEach((f) => {
    const feature = f.feature.padEnd(25);
    const examplePrompt = f.examplePrompt.padEnd(35);
    const isWorking = ("" + f.isWorking).padEnd(10);
    if (f.isWorking !== "Yes") {
      console.log(
        `|%c ${feature} | ${examplePrompt} | ${isWorking} |`,
        "color: #c4c4c4",
      );
    } else {
      console.log(`| ${feature} | ${examplePrompt} | ${isWorking} |`);
    }
  });
  console.log(`${"-".repeat(80)}`);
};

export const botFeatures = () => {
  console.log("Nice!😀 It seems you are interested to use Denie...");
  console.log("Great, I will help you use Denie.");
  console.log("\nFollowing are the things that Denie can do:\n");

  showFeatures();
  return "Job Done";
};
