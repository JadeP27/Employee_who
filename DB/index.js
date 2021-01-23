var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Bootcamp2020",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
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
        runPrompts();
    });
  }
  function addRole() {
    connection.query("INSERT INTO role SET ?",
    {
      role: answer.role
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " role inserted!\n");
        runPrompts();
    });
  }
  function addEmployee() {
    connection.query("INSERT INTO people SET ?",
    {
      people: answer.people
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " people inserted!\n");
        runPrompts();
    });
  }
  function viewDept() {
    let query = "SELECT * FROM department";
    connection.query(query, { department: answer.department }, function(err, res) {
      if (err) throw err;
        runPrompts();
    });
  }
  function viewRole() {
    let query = "SELECT * FROM role";
    connection.query(query, { role: answer.role }, function(err, res) {
      if (err) throw err;
        runPrompts();
    });
  }
  function viewEmployee() {
    let query = "SELECT * FROM people";
    connection.query(query, { employee: answer.people }, function(err, res) {
      if (err) throw err;
        runPrompts();
    });
  }
  
  function multiSearch() {
    var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].artist);
      }
      runPrompts();
    });
  }
  
  
  




// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
