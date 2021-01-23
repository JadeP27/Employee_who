const node = require("node");
const mysql = require("mysql");
const inquirer = require("inquirer");

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// create the connection for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bootcamp2020",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting");
    runPrompts();
  }
});

//create the function to run the prompts via inquirer
function runPrompts() {
    inquirer
      .prompt({
        name: "questions",
        title: "input",
        message: "Welcome to Employee Database, what would you like to do?",
        choices: [
          "Add department",
          "Add role",
          "Add employee",
          "View all departments",
          "View all roles",
          "View all employees",
          "Update employee roles",
          "View employees by manager",
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Add department":
          addDept();
          break;
  
        case "Add role":
          addRole();
          break;
  
        case "Add employee":
          addEmployee();
          break;
  
        case "View all departments":
          viewDepts();
          break;
  
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        }
      });
  }