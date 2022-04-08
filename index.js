// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateMarkdown, writeFile } = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const promptProject = project => {
    return inquirer
      .prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter a name for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You must provide a description for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide installation instructions for your application.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some usage information'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide information on how someone can contribute to your project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for testing your application.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license are you using for this project? Choose from MIT, BSD 2, or GNU.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide your name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
  ])
};

promptProject()
  .then(data => {
    return generateMarkdown(data);
})
  .then(pageMD => {
      return writeFile(pageMD);
  })