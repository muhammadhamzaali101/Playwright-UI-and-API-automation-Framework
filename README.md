# Getting Started

Guide users through getting your code up and running on their own system. In this section we are discussing:

1.	Installation process
2.	Software dependencies
3.	Build, Test and Reporting

# Installation 

Run from your project's root directory
•	npm i -D @playwright/test
•	npm i -D playwright 
•	npx playwright install


# Sofwate Dependencies

Playwright doesn't come with the built-in support for BDD so we are going to use the help of another tool Cucumber
•	npm i -D @cucumber/cucumber@9.1.2 @cucumber/pretty-formatter
•	Node.js version 10 or above. If you don't already have node installed in your system you can use this blog as a guide
•   npm install multiple-cucumber-html-reporter --save-dev for reporting


# Build, Test and Reporting

•   To execute the project using the provided `package.json` file, follow these steps:
    •   npm run UITest
        o	This Command is used for the execution of only UI tests.
        o	This command will trigger the execution of the Cucumber tests using `cucumber-js`.
        o	The `UITest` script runs the features with tag `@UI` using configurations in `cucumber.json` file. 
    •  After execution of UI Test Cases `.json` file created, execute `npm run UI_Report` command to create `Multi cucumber HTML report` in UI Directory
    •   npm run APITest
        o	This Command is used for the execution of only API tests.
        o	This command will trigger the execution of the Cucumber tests using `cucumber-js`.
        o	The `UITest` script runs the features with tag '@API' using configurations in `cucumber-api.json` file. 
    •   After execution of API Test Cases `.json` file created, execute `npm run API_Report` command to create `Multi cucumber HTML report` in Directory
