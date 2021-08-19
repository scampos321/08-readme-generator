const fs = require('fs');
const inquirer = require('inquirer');
inquirer
    .prompt([{
            type: 'input',
            message: 'What is your project title?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Write a short description',
            name: 'desc',

        },
        {
            type: 'checkbox',
            message: 'What license do you prefer?',
            name: 'license',
            choices: ['BSD', 'MIT', 'GPL'],
            default: 'MIT'
        },
        {
            type: 'input',
            message: 'What is your GitHub username? ',
            name: 'gh',
        },
        {
            type: 'input',
            message: 'What is your email? ',
            name: 'email',
        },
    ])
    .then(answers => {
        console.log('Success!', answers.name);
    });












function writeToFile(fileName, data) {}