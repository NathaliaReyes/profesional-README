const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 
                  'Please provide a description of your project.', 
                  'Please provide installation instructions for your project.', 
                  'Please provide usage information for your project.', 
                  'PLease provide credits for your project.',
                  'Please select a license for your project.', 
                  'Please provide the features of your project.',
                  'Please provide contribution guidelines for your project.', 
                  'Please provide test instructions for your project.', 
                  ];

// TODO: Create a function to write README file
/* function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')
  );
} */

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title'
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description'
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation'
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage'
    },
    {
      type: 'input',
      message: questions[4],
      name: 'credits'
    },
    {
      type: 'list',
      message: questions[5],
      name: 'license',
      choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None']
    },
    {
      type: 'input',
      message: questions[6],
      name: 'features'
    },
    {
      type: 'input',
      message: questions[7],
      name: 'contributing'
    },
    {
      type: 'input',
      message: questions[8],
      name: 'tests'
    }
  ])
  .then((data) => {
    console.log(data);

    /* let responseJson = JSON.stringify(data, null, 4);
    console.log(responseJson); */

    fs.writeFile('README.md', generateMarkdown(data), (err) =>
      err ? console.error(err) : console.log('Success!')
    )

  });
};

// Function call to initialize app
init();

