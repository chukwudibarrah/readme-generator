import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateMarkdown from "./starter/utils/generateMarkdown.js";
import util from "util";

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const promptUser = () =>
  inquirer.prompt([
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
      name: "usage",
      message:
        "How is the application used? (include instructions and examples for use)",
    },
    {
      type: "input",
      name: "collaboration",
      message:
        "Who did you collaborate with? (include any third party assets and or tutorials that helped along the way)",
    },
    {
      type: "input",
      name: "badges",
      message: "Include SimpleIcon logos?",
    },
    {
      type: "input",
      name: "features",
      message: "List the features of your project (separated by commas)",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please choose a license",
      choices: [
        "Creative Commons license family",
        "MIT",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "contributions",
      message: "How can developers contribute to your project?",
    },
    {
      type: "input",
      name: "tests",
      message:
        "What are some tests of your application and how can users to run them?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);
// .then((answers) => console.log(response));

const generateMd = (answers) =>
  `# ${answers.title}

## Description

${answers.motivation}
${answers.function}
${answers.solution}
${answers.lessons}

## Table of Contents

* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Badges](#badges)
* [Features](#features)
* [License](#license)
* [How to contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${answers.steps}

## Usage

${answers.usage}

## Credits

${answers.collaboration}

## Badges

${answers.badges}

## Features

${answers.features}

## License

This application is covered under the ${answers.license} license.

## How to Contribute

${answers.contributions}

## Tests

${answers.tests}

## Questions

Connect with me on GitHub: [${answers.github}](https://github.com/${answers.github})
Or send me an email: <${answers.email}>`;

promptUser()
  .then((answers) => writeFileAsync("README.md", generateMd(answers)))
  .then(() => console.log("Successfully wrote to README.md"))
  .catch((err) => console.error(err));