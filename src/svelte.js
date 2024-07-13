import executeCommand from "./helpers/executeCommand.js";

const addTailwindToSvelte = async (projectPath) => {
  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
  export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {}
    },
    plugins: []
  };`;
};
