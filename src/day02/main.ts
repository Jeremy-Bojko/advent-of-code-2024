import * as utilities from "../utilities";
const inputData = `${__dirname}/inputData.txt`;
const testData = `${__dirname}/testData.txt`;

/**
 * Part 1
 */

utilities.fetchAndTest(inputData).then((data: string) => {
  const reports = utilities
    .parseListToTab(data)
    .map((x) => x.split(" "))
    .map((x) => x.map((y) => parseInt(y)));

  // let couldBeIncreasing = ;
  const results = reports.map((x) => (x[0] < x[1] ? isIncreasing(x) : isIncreasing(x.reverse())));

  console.log(results.filter((x) => x).length);
});

export const isIncreasing = (tab: number[]): boolean => {
  for (let i = 0; i < tab.length - 1; i++) {
    if (tab[i] >= tab[i + 1]) {
      return false;
    }

    if (!isMovingGently(tab[i + 1], tab[i])) {
      return false;
    }
  }
  return true;
};

export const isMovingGently = (firstNumber: number, secondNumber: number): boolean => {
  return Math.abs(firstNumber - secondNumber) <= 3;
};

/**
 * Part 2
 */
