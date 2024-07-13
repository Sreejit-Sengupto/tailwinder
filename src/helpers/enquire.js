import readline from "node:readline/promises";
import process from "node:process";
import chalk from "chalk";

const confirmAction = async (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(chalk.cyanBright(`${message}(y/n) `));
  rl.close();
  return answer.toLowerCase() === "yes" || answer.toLowerCase() === "y";
};

export default confirmAction;
