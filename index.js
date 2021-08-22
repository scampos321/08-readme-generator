const fs = require('fs');
const inquirer = require('inquirer');
const { isRegExp } = require('util');
const {
    generateMarkdown
} = require('./utils/generateMarkdown')
const questions = [{
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'title',
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
        choices: ['BSD', 'MIT', 'GPL'],
        default: 'MIT'
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
        .then(answers => {
                // console.log('ANSWERS=>', answers)
                    //I want to take the answers an feed them into the generateMArkdown function
                    //from that you get back a string to be written to a md file

                var content = generateMarkdown(answers);
                // console.log('CONTENT===>', content)
                fs.writeFile('README.md', content, err => {
                    if(err) {
                        console.log(err, "this is an error")
                        return;
                    } else {
                        console.log ('\x1b[35m%s\x1b[0m', "Generating README...");
                    }
                })
                

            })
                    
}
    

    init();