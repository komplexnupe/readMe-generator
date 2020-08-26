let inquirer = require("inquirer");
let fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your project name?",
        name: "title"
      },
      {
        type: "input",
        message: "Please describe your project:",
        name: "description"
      },
      {
        type: "input",
        message: "What are the steps to running this project?",
        name: "installation"
      },
      {
        type: "input",
        message: "Do you have any usage tips for users that download your code?",
        name: "usage"
      },
      {
        type: "list",
        message: "Please select a license for your project:",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "licenses"
      },
      {
        type: "input",
        message: "Who are the contributors for this project? How can others contribute?",
        name: "contributions"
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      }
      
]).then(function(answers){
    console.log(answers);

    let readme =`# ${answers.title}
![License](https://img.shields.io/badge/License-${answers.licenses}-blue)
    
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Test](#test)
- [Questions](#questions)

    
## <a name="installation">Installation</a>

${answers.installation}
    
## <a name="usage">Usage</a>

${answers.usage}
    
## <a name="license">License</a>

![License](https://img.shields.io/badge/License-${answers.licenses}-blue)
    
## <a name="contributions">Contributions</a>

${answers.contributions}
    
## <a name="test">Test</a>

Please see a demo of the project below:
![Demo]()

## <a name="questions">Questions</a>

${answers.username}
Please send all questions about this code or any other of my projects to ${answers.email}`;


fs.writeFile("README.md", readme, function(err){
        if(err) {
            return console.log(err);
        }
        console.log("Sucess!")
    });
})