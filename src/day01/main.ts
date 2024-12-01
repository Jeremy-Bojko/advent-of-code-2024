import * as utilities from "../utilities";
const inputData = `${__dirname}/inputData.txt`;
const testData = `${__dirname}/testData.txt`;

/**
 * Part 1
 */

// utilities.fetchAndTest(inputData).then((data: string) => {
//   const locations = utilities
//     .parseListToTab(data)
//     .map((x) => x.split("   "))
//     .map((x) => x.map((y) => parseInt(y)));
//   // Separate the locations into two columns
//   const leftColumn = mapAndSort(locations, 0);
//   const rigthColumn = mapAndSort(locations, 1);

//   // Calculate the distance between the two columns
//   const result = [];
//   for (let i = 0; i < leftColumn.length; i++) {
//     result.push(Math.abs(leftColumn[i] - rigthColumn[i]));
//   }
//   // Sum the distances
//   console.log(result.reduce((a, b) => a + b));
// });

const mapAndSort = (data: Array<number>[], index: number): Array<number> => {
  return data.map((x) => x[index]).sort((a, b) => a - b);
};

/**
 * Part 2
 */

utilities.fetchAndTest(inputData).then((data: string) => {
  const locations = utilities
    .parseListToTab(data)
    .map((x) => x.split("   "))
    .map((x) => x.map((y) => parseInt(y)));
  // Separate the locations into two columns
  const leftColumn = locations.map((x) => x[0]);
  const rigthColumn = locations.map((x) => x[1]);

  // Calculate the occurence of leftcolumn numbers in rightcolumn
  const result = leftColumn.map((x) => x * occurenceCounter(x, rigthColumn));

  // Sum the distances
  console.log(result);
  console.log(result.reduce((a, b) => a + b));
});

const occurenceCounter = (numberToFind: number, list: Array<number>): number => {
  return list.filter((x) => x === numberToFind).length;
};
