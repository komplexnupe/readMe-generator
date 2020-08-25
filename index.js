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
        message: "Are others allowed to contribute to this project via pull requests? If so, what and how can they contribute?",
        name: "contributions"
      },
      {
        type: "input",
        message: "Provide example how to run the code:",
        name: "tests"
      },
      {
        type: "input",
        message: "Please provide details on how user should contact you about questions/issues:",
        name: "questions"
      }
      
]).then(function(answers){
    console.log(answers);

    let readme = `# ${answers.title}
    
    ${answers.description}
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## Licenses
    ![License](https://img.shields.io/badge/License-${answers.licenses}-blue)
    
    ## Contributions
    ${answers.contributions}
    
    ## Test
    ${answers.tests}
    
    ## Questions
    ${answers.questions}`;
    fs.writeFile("README.md", readme, function(err){
        if(err) {
            return console.log(err);
        }
        console.log("Sucess!")
    });
})