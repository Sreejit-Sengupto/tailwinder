import { exec } from "child_process";
import chalk from "chalk";
import modifyTailwindConfig from "./modifyTailwindConfig.js";
import modifyCssFile from "./modifyGlobalCss.js";

const executeCommand = (
  projectPath,
  tailwindConfigFile,
  cssFile,
  cssFileName,
  cssFileParentPath
) => {
  exec(
    `cd ${projectPath} && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`,
    async (error, stderr, stdout) => {
      if (error) {
        console.error(chalk.red(`Error: ${error.message}`));
        return;
      }
      if (stderr) {
        console.error(chalk.yellow(stderr));
      }
      console.log(chalk.green(stdout));

      console.log(chalk.blueBright("Modifiying required files...."));
      await modifyTailwindConfig(projectPath, tailwindConfigFile);
      await modifyCssFile(cssFileName, cssFileParentPath, cssFile);

      console.log(
        chalk.green("TailwindCSS successfully added to your project🎉")
      );
    }
  );
};

export default executeCommand;
