import { exec } from "child_process";
import chalk from "chalk";
import modifyTailwindConfig from "./helpers/modifyTailwindConfig.js";
import modifyCssFile from "./helpers/modifyGlobalCss.js";
import executeCommand from "./helpers/executeCommand.js";

const addTailwindToVite = async (projectPath) => {
  const tailwindConfig = `
          module.exports = {
          content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
          theme: {
          extend: {},
          },
          plugins: [],
          };`;

  const cssFile = `@tailwind base;
          @tailwind components;
          @tailwind utilities;`;

  executeCommand(projectPath, tailwindConfig, cssFile, "index.css", "./src");
};

export default addTailwindToVite;
