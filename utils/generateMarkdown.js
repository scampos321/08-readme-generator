// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `
    ${answers.title}
    ## Table of Contents
    [Description](#description)

    [Installation](#installation)

    [Usage](#usage)

    [Tests](#tests)

    ## Description
    ${answers.desc}

    ## Usage
    ${answers.using}

    ## Installation

    ${answers.depen}
    
    ## Contributing
    ${answers.contri}

    ## Tests
    ${answers.test}
   
    ## Questions
    If you have any questions about my project, email me at ${answers.email} or check out my GitHub projects [${answers.git}](https://github.com${answers.git})
    
`;
}

module.exports = { generateMarkdown }