//const node = require("node");
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
  }
  runPrompts();
});

//functions that connect to the mysql database
function addDept() {
  connection.query("INSERT INTO department SET ?",
  {
    department: answer.department
  },
  function(err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " department inserted!\n");
  });
  runPrompts()
}
function addRole() {
  connection.query("INSERT INTO role SET ?",
  {
    role: answer.role
  },
  function(err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " role inserted!\n");
  });
  runPrompts()
}
function addEmployee() {
  connection.query("INSERT INTO people SET ?",
  {
    people: answer.people
  },
  function(err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " people inserted!\n");
  });
  runPrompts()
}
function viewDepts() {
  let query = "SELECT * FROM department";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.log(res)
  });
  runPrompts()
}
function viewRoles() {
  let query = "SELECT * FROM role";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.log(res)
  });
  runPrompts()
}
function viewEmployees() {
  let query = "SELECT * FROM people";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.log(res)
  });
  runPrompts()
}

//create the function to run the prompts via inquirer
function runPrompts() {
    inquirer
      .prompt({
        name: "questions",
        title: "input",
        type: "list",
        choices: [
          "Add department",
          "Add role",
          "Add employee",
          "View all departments",
          "View all roles",
          "View all employees",
          "Update employee roles",
          "View employees by manager",
        ],
        message: "Welcome to Employee Database, what would you like to do?",
        
      })
      .then(function(answer) {
        switch (answer.questions) {
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
