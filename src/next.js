import executeCommand from "./helpers/executeCommand.js";

const addTailwindToNext = async (projectPath) => {
  const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
   // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

  const cssFile = `
@tailwind base;
@tailwind components;
@tailwind utilities;`;

  executeCommand(
    projectPath,
    tailwindConfig,
    cssFile,
    "globals.css",
    "./src/app"
  );
};

export default addTailwindToNext;
