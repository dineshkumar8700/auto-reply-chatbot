import { features } from "../data/features.js";

const generateStructure = () => {
  const header = `${"-".repeat(80)}\n`;
  const body = `| ${"Feature".padEnd(25)} | ${"Example".padEnd(35)} | ${
    "Is Active".padEnd(10)
  } |\n`;
  const footer = `${"-".repeat(80)}`;

  return [header, body, footer];
};

const showFeatures = () => {
  const structure = generateStructure();
  console.log(structure.join(""));
  features.forEach((f) => {
    const feature = f.feature.padEnd(25);
    const examplePrompt = f.examplePrompt.padEnd(35);
    const isWorking = ("" + f.isWorking).padEnd(10);
    const deniFeature = `| ${feature} | ${examplePrompt} | ${isWorking} |`;
    if (!f.isWorking) {
      console.log(`%c${deniFeature}`, "color: #949494");
    } else {
      console.log(deniFeature);
    }
  });
  console.log(structure[2]);
};

export const botFeatures = () => {
  console.log("Nice!😀 It seems you are interested to use Denie...");
  console.log("Great, I will help you use Denie.");
  console.log("\nFollowing are the things that Denie can do:\n");

  showFeatures();
  return "Job Done";
};
