//functions that connect to the mysql database
function addDept() {
    let query = "SELECT * FROM ";
    connection.query(query, { artist: answer.artist }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
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
  
  function rangeSearch() {
    inquirer
      .prompt([
        {
          name: "start",
          type: "input",
          message: "Enter starting position: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          name: "end",
          type: "input",
          message: "Enter ending position: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
        connection.query(query, [answer.start, answer.end], function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log(
              "Position: " +
                res[i].position +
                " || Song: " +
                res[i].song +
                " || Artist: " +
                res[i].artist +
                " || Year: " +
                res[i].year
            );
          }
          runSearch();
        });
      });
  }



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
