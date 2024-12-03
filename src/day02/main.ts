import * as utilities from "../utilities";
const inputData = `${__dirname}/inputData.txt`;
const testData = `${__dirname}/testData.txt`;

const gptFalse: any[] = [];
const jeremFalse: any[] = [];
/**
 * Part 1
 */

// utilities.fetchAndTest(inputData).then((data: string) => {
//   const reports = utilities
//     .parseListToTab(data)
//     .map((x) => x.split(" "))
//     .map((x) => x.map((y) => parseInt(y)));

//   const results = reports.map((x) => (x[0] < x[1] ? isIncreasing(x) : isIncreasing(x.reverse())));

//   console.log(results.filter((x) => x).length);
// });

export const isIncreasing = (tab: number[]): { safe: boolean; failedIndex: number } => {
  for (let i = 0; i < tab.length - 1; i++) {
    const diff = tab[i + 1] - tab[i];

    if (tab[i] >= tab[i + 1] || Math.abs(diff) > 3 || Math.abs(diff) < 1) {
      console.log(`Problème détecté à l'indice ${i} (valeurs: ${tab[i]} et ${tab[i + 1]})`);

      return { safe: false, failedIndex: i };
    }

    if (!isMovingGently(tab[i + 1], tab[i])) {
      return { safe: false, failedIndex: i };
    }
  }
  return { safe: true, failedIndex: -1 };
};

export const isMovingGently = (firstNumber: number, secondNumber: number): boolean => {
  return Math.abs(firstNumber - secondNumber) <= 3 && Math.abs(firstNumber - secondNumber) >= 1;
};

/**
 * Part 2
 */

utilities.fetchAndTest(inputData).then((data: string) => {
  const reports = utilities
    .parseListToTab(data)
    .map((x) => x.split(" "))
    .map((x) => x.map((y) => parseInt(y)));

  const results = reports.map((x, index) => (x[0] < x[1] ? isIncreasingWithAcceptableError(x, 1) : isIncreasingWithAcceptableError(x.reverse(), 1)));

  console.log(results.filter((x) => x).length);
});

export const isIncreasingWithAcceptableError = (tab: number[], acceptableError: number): boolean => {
  let error = 0;
  let result = { safe: false, failedIndex: -1 };

  while (error <= acceptableError) {
    result = isIncreasing(tab);
    if (result.safe) {
      break;
    } else {
      error++;

      tab.splice(result.failedIndex + 1, 1);
      // tab = tab.filter((_, idx) => idx !== result.failedIndex + 1);
    }
  }
  return result.safe;
};
