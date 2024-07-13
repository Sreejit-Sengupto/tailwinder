#!/usr/bin/env node
import chalk from "chalk";
import cliSpinners from "cli-spinners";
import { Command } from "commander";
import logUpdate from "log-update";
import addTailwindToNext from "../src/next.js";
import addTailwindToVite from "../src/vite.js";

const program = new Command();

const spinner = cliSpinners.dots;
program
  .version("1.0.0")
  .description("Add Tailwind to Frontend Frameworks with a single command");

program
  .command("react-vite <path>")
  .description("Add Tailwind to Vite project")
  .action(async (path) => {
    console.log(chalk.blueBright("Adding tailwind to vite project...."));
    addTailwindToVite(path);
  });

program
  .command("next <path>")
  .description("Add Tailwind to Nextjs project")
  .action(async (path) => {
    console.log(chalk.blueBright("Adding tailwind to NextJS project...."));
    addTailwindToNext(path);
  });

program.parse(process.argv);
