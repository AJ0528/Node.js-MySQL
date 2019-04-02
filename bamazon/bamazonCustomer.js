var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889 ,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

function start() {
  connection.query("SELECT * FROM products", function(err, results) {
  if (err) throw err;

      var table = new Table({
      head: ['ID','Product Name','Department Name', 'Stock','Price']
    , colWidths: [5,18,20,12,12]
      });

   
    
    for (var i = 0; i < results.length; i++) {
      table.push(
        [results[i].id, results[i].product_name, results[i].deparment_name, results[i].stock_quantity, results[i].price]
       
        
      )
      
    }
   console.log(table.toString());
   purchase()
    });

  
  // function to handle posting new items up for auction
function purchase() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "Enter the ID of what product you like to buy?"
      },
      {
        name: "quanity",
        type: "input",
        message: " how many units of the product they would like to buy?"
      },
    ])
      .then(function(answer) {
        // when finished prompting, insert a new item into the db with that info
      console.log(answer.item);
      console.log(answer.quanity);
      })
    }
  
  }
  connection.query()

