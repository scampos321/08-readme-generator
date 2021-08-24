const fs = require('fs');
const inquirer = require('inquirer');
// const { isRegExp } = require('util');
const {
    generateMarkdown
}
= require('./utils/generateMarkdown')
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'git',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',

    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'desc',

    },
    {
        type: 'list',
        message: 'What license do you prefer?',
        name: 'license',
        choices: [
        'BSD [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', 
        'MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'Unlicensed [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    ],
        default: 'MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'depen',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
        default: 'npm test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using your repo?',
        name: 'using',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contri',
    },
];

function init() {
    inquirer.prompt(questions)
        .then(function(answers){
                // console.log('ANSWERS=>', answers)
                writeToFile("TestREADME.md", generateMarkdown(answers));
                return(answers);
        })
        
                    //I want to take the answers an feed them into the generateMArkdown function
                    //from that you get back a string to be written to a md file

        function writeToFile(fileName, answers) {
            // console.log('CONTENT===>', content)
                fs.writeFile("./test/" + fileName, answers,(err) => {
                    if(err) {
                        console.log(err, "There is an error")
                        return;
                    } else {
                        console.log ('\x1b[35m%s\x1b[0m', "Generating " + fileName + "...");
                    }
                });
                }
        
        
}

init();