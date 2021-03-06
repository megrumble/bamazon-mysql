//dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //your username
    user: "root",

    //your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    readProducts();
});

//display results in a table
function displayTable(res) {
    var table = new Table({
        head: ["ID", "Product Name", "Department", "Price", "In Stock"]
    });
    for (i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    };
    console.log(table.toString());
    makeOrder();
}

//display all of the products for sale
function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        //log all results of SELECT statement
        // console.log(res);
        displayTable(res);
    })
}

//create order using inquirer prompts
function makeOrder() {
    inquirer.prompt([{
            name: "item",
            type: "input",
            message: "What is the item ID of the product you would like to purchase?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many of this item would you like?"
        }
    ]).then(function (answer) {
        console.log(answer);

        connection.query("SELECT * FROM products WHERE ?", [{
                item_id: answer.item
            }],
            function (err, res) {
                if (err) throw err;
                console.log(res[0]);
                if (answer.quantity > res[0].stock_quantity) {
                    console.log("Insufficient quantity. Your order cannot be placed.");
                    nextOrder();
                } else {
                    amountOwed = answer.quantity * res[0].price;
                    console.log("You owe $" + amountOwed);
                    addToCart();

                    connection.query("UPDATE products SET ? WHERE ?", [{
                        stock_quantity: res[0].stock_quantity - answer.quantity
                    }, {
                        item_id: answer.item
                    }], function (err, res) {
                        // readProducts()
                    });

                }
            })
    })
};

function addToCart() {
    inquirer.prompt([{
        name: "item",
        type: "checkbox",
        message: "Would you like to",
        choices: ["Buy now?", "Add to cart?"]
    }]).then(function (answer) {
        console.log((answer.item[0]));
        if (answer.item[0] === "Buy now?") {
            console.log("Checkout");
            console.log("Your total is $ " + amountOwed);
        } else {
            console.log("anything");
        }
    })

}