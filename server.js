// import your functions from db.index.js
/// this is your index.js for terminal talking
// prompts
// when you start the application,it says welcome to emplyee database inside your terminal
// it will ask what you to do
//1. show text for select all employees
//when i select it, it runs one of the function from DB/index.js, RUN GetAllEmployees
//2 I want to add an employee
// it will ask what is the empolyees name?
// you tybe "John"
// it will run the function addEmployee("John")

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
        message: "What would you like to do?",
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
    
        case "Update employee roles":
          editEmployeeRoles();
          break;
    
        case "View employees by manager":
          managerView();
          break;
        }
      });
  }

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
