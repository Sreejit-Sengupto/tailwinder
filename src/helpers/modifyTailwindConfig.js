import confirmAction from "./enquire.js";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const modifyTailwindConfig = async (projectPath, fileContent) => {
  const tsConfirmation = await confirmAction("Are you using Typescript?");
  if (tsConfirmation) {
    fs.unlinkSync(path.join(projectPath, "tailwind.config.js"));
    console.log(chalk.red("Removed tailwind.config.js"));
  }

  fs.writeFileSync(
    path.join(
      projectPath,
      `${tsConfirmation ? "tailwind.config.ts" : "tailwind.config.js"}`
    ),
    fileContent,
    "utf-8"
  );
  console.log(chalk.greenBright("tailwind.config file modified"));
};

export default modifyTailwindConfig;
