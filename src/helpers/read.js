import readline from "node:readline/promises";
import process from "node:process";
import chalk from "chalk";

const read = async (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const userInput = await rl.question(chalk.cyanBright(message + " "));
  rl.close();
  return userInput;
};

export default read;
