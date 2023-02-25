import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateMarkdown from "./starter/utils/generateMarkdown.js";

// array of questions for user
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "motivation",
        message: "What was your motivation for creating this project?",
      },
      {
        type: "input",
        name: "function",
        message: "What does the application do?",
      },
      {
        type: "input",
        name: "solution",
        message: "What problem does it solve?",
      },
      {
        type: "input",
        name: "lessons",
        message: "What did you learn?",
      },
      {
        type: "input",
        name: "steps",
        message:
          "What are the steps required to install your project? (Step-by-step instruction)",
      },
      {
        type: "input",
        name: "collaboration",
        message: "Who did you collaborate with?",
      },
      {
        type: "input",
        name: "collaboration",
        message:
          "Include SimpleIcon logos? (Copy and paste your preferred logo(s) from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)",
      },
      {
        type: "input",
        name: "features",
        message: "List the features of your project (separated by commas)",
      },
      {
        type: "input",
        name: "contributions",
        message: "How can developers contribute to your project?",
      },
    ])
    .then((response) => console.log(response));

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
