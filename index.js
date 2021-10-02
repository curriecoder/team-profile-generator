// node modules
const fs = require('fs');
const inquirer = require('inquirer');

const teamArr = [];

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require("./lib/engineer");

const managerPrompt = [
  {
    type: "input",
    message: "Enter team manager name.",
    name: "name",
  },
  {
    type: "input",
    message: "Enter team manager ID.",
    name: "id",
  },
  {
    type: "input",
    message: "Enter team manager email address.",
    name: "email",
  },
  {
    type: "input",
    message: "Enter team manager office number.",
    name: "offNum",
  },
];


// Prompt User for information(Inquirer):
  // Set user as manager
inquirer
  .prompt(managerPrompt)
  .then((managerResponse) => {
    const manger = new Manager (name, id, email, offNum);
    console.log(managerResponse);
    teamArr.push(manger);
    console.log(manager);
  });


const employeePrompt = [
  {
    type: "list",
    message: "Select the role of new member",
    name: "roleSelect",
    choices: ["Intern", "Engineer"],
  },
  {
    type: "input",
    message: "Enter name of new member",
    name: "name",
  },
  {
    type: "input",
    message: "Enter ID of new member",
    name: "id",
  },
  {
    type: "input",
    message: "Enter email of new member",
    name: "email",
  },
  {
    type: "input",
    message: "Enter GitHub username of new engineer",
    name: "github",
    when: (input) => input.roleSelect === "Engineer",
  },
  {
    type: "input",
    message: "Enter school name of new intern",
    name: "school",
    when: (input) => input.roleSelect === "Intern",
  },
  {
    type: "confirm",
    name: "confirmAddEmployee",
    message: "Would you like to add more team members?",
    default: false,
  },
];

const addEmployee = () => {
  inquirer
    .prompt(employeePrompt)
    .then(employeeInfo => {
      let employeeInfo = { name, id, email, roleSelect, github, school, confirmAddEmployee };
      let employee;
      // **Maybe refactor into switch case**
      if (roleSelect === "Engineer") {
        employee = new Engineer (name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);
        console.log(employee);
      }
      teamArr.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArr);
      } else {
        return teamArr;
      }
    })
};

  //1. ID:
  //2. Email:
  //3. GitHub Username(Engineer):
  //4. School(Intern):
  

// Need to link GitHub profile to cards.

// Need to link Default Email program when card eamils are clicked.

// Create some way to enter manager name, ID, email, and office number. 
  // After this has been checked, user can add other profiles.
  // Present list to select what kind of profile we're making:
    // 1. Engineer - then return to menu.
    // 2. Intern - then return to menu.

// Option to finish building the team presented ???
  // Writes/renders HTML to view team details.




// FILE STRUCTURE:
// .
// ├── __tests__/             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet      
// ├── lib/                   // classes
// ├── src/                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json       


// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated