import fs from "fs";

/**
 * Utilities
 */

/**
 * fetchAndTest reads the entire contents of a file
 * @param pathFile
 * @returns a string with the content of the file
 */
export const fetchAndTest = async (pathFile: string): Promise<string> => {
  try {
    const data = fs.readFileSync(pathFile, "utf8");
    return data;
  } catch (err: any) {
    console.error(err);
    return err.status;
  }
};

// data parsing
export const parseListToTabInt = (listMesure: string) => {
  let tab = listMesure.split("\n").map((x) => parseInt(x));
  // tab.pop();
  return tab;
};

export const parseListToTab = (listMesure: string) => {
  let tab = listMesure.split("\n");
  // tab.pop();
  return tab;
};

export const colorParam = {
  effect: {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
  },
  color: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  },
  backGround: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
  },
};

/**
 * Coloring console text
 * { effect, color, background}
 * @param {?Array<string>} color 
 * @param {string} textToLog 
 * 
{
  effect : {
    reset : "\x1b[0m",
    bright : "\x1b[1m",
    dim : "\x1b[2m",
    underscore : "\x1b[4m",
    blink : "\x1b[5m",
    reverse : "\x1b[7m",
    hidden : "\x1b[8m"
  },
  color : { 
    black : "\x1b[30m",
    red : "\x1b[31m",
    green : "\x1b[32m",
    yellow : "\x1b[33m",
    blue : "\x1b[34m",
    magenta : "\x1b[35m",
    cyan : "\x1b[36m",
    white : "\x1b[37m"
  },
  backGround : { 
    black : "\x1b[40m",
    red : "\x1b[41m",
    green : "\x1b[42m",
    yellow : "\x1b[43m",
    blue : "\x1b[44m",
    magenta : "\x1b[45m",
    cyan : "\x1b[46m",
    white : "\x1b[47m"
  }
}
 */
export const log = (textToLog: string, color: string[] = []) => {
  const defaultColor = [colorParam.backGround.green, colorParam.color.black];
  const blueColor = [colorParam.backGround.blue, colorParam.color.black];
  const yellowColor = [colorParam.backGround.yellow, colorParam.color.black];
  if (color.includes("blue")) {
    color = [...blueColor];
  } else if (color.includes("blue")) {
    color = [...yellowColor];
  } else if (color.length == 0) {
    color = [...defaultColor];
  }
  console.log(`${color.join("")}%s\x1b[0m`, textToLog);
};
