
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
return `
${answers.license}
# ${answers.title}
# Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Tests](#tests)

# Description

${answers.desc}

## Usage

${answers.using}

## Installation

* ${answers.depen}
    
## Contributing

${answers.contri}

## Tests

* ${answers.test}
   
## Questions

If you have any questions about my project, email me at ${answers.email} or check out my GitHub projects [${answers.git}](https://github.com${answers.git})   
`;
}

module.exports = { generateMarkdown }