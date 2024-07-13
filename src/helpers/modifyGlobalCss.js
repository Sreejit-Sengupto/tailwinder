import confirmAction from "./enquire.js";
import read from "./read.js";
import fs from "fs";
import chalk from "chalk";

const modifyCssFile = async (filename, parentDirectoryPath, filecontent) => {
  let globalCssFileName = filename.split(".")[0].trim();

  const globalcssConfirmation = await confirmAction(
    `Does your css file is named ${globalCssFileName}.css? `
  );
  if (!globalcssConfirmation) {
    globalCssFileName = (await read("What is your main css file named? "))
      .split(".")[0]
      .trim();
  }

  const filePath = `${parentDirectoryPath}/${globalCssFileName}.css`;
  fs.writeFileSync(filePath, filecontent, "utf-8");
  console.log(chalk.greenBright(`${globalCssFileName} file modified`));
};

export default modifyCssFile;
