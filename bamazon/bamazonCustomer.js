var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306 ,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

  function start() {
    inquirer
      .prompt({
        name: "bamazon_products",
        type: "input",
        message: "Enter ID of the product they would like to buy?",
        choices: ["1", "2", "3", "4", "5", "6", "7","8","9","10"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.bamazon_products  === "1", "2", "3", "4", "5", "6", "7","8","9","10") {
          bamazon_products();
        }
  //       else if(answer.bamazon_products === "") {
  //         bidAuctio();
  //       } else{
  //         connection.end();
  //       }
  //     });
  // }