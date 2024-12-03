import * as utilities from "../utilities";
const inputData = `${__dirname}/inputData.txt`;
const testData = `${__dirname}/testData.txt`;

/**
 * Part 1
 */

// utilities.fetchAndTest(inputData).then((data: string) => {
//   const corruptedInstructions = data;
//   const correctInstruction = checkInstruction(corruptedInstructions).map((x) => extractDigit(x));
//   console.log(correctInstruction.map((x) => x[0] * x[1]).reduce((a, b) => a + b));
// });

export const checkInstruction = (instruction: string): string[] => {
  const regex = /mul\((\d+),(\d+)\)|(don\'t\(\))|(do\(\))/g;
  const result = instruction.match(regex);
  return result ? result : [];
};

export const extractDigit = (instruction: string): number[] => {
  const regex = /\d+/g;
  const result = instruction.match(regex);
  return result ? result.map((x) => +x) : [];
};

/**
 * Part 2
 */

utilities.fetchAndTest(inputData).then((data: string) => {
  const corruptedInstructions = data;
  const extractedInstructions = ignoreDontData(checkInstruction(corruptedInstructions));
  const correctInstruction = extractedInstructions.filter((x) => x !== "do()").map((x) => extractDigit(x));
  console.log(correctInstruction.map((x) => x[0] * x[1]).reduce((a, b) => a + b));
});

export const ignoreDontData = (data: string[]): string[] => {
  let keepMode = true;
  return data.filter((x) => {
    if (x === "don't()") {
      keepMode = false;
    } else if (x === "do()") {
      keepMode = true;
    }
    return keepMode;
  });
};
