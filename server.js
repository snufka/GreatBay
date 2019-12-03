var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourRootPassword',
    database: 'greatbay_db'
});

connection.connect();

connection.query("SELECT * FROM items",
    function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });

connection.end();

const bidOrPost = [
    {
        type: "list",
        name: "choose",
        message: "Would you like to bid or post",
        choices: ["Bid", "Post", "Exit"]
    },
    {
        type: "list",
        name: "chooseItem",
        message: "Which item to bid?",
        choices: [],//array of posted items
        when: function (answers) {
            return answers.choose == "Bid";
        }
    },
    {
        name: "bidItem",
        message: "What is your bid?",

        when: function (answers) {
            return answers.choose == "Bid";
        }
    },
    {

        name: "PostItem",
        message: "Which item woould you like to post?",
        //item="dress", category="dress", starting_bid=3.5
        when: function (answers) {
            return answers.choose == "Post";
        }
    },
    {

        name: "PostCategory",
        message: "What category is your item?",
        //item="dress", category="dress", starting_bid=3.5
        when: function (answers) {
            return answers.choose == "Post";
        }
    },
    {

        name: "PostPrice",
        message: "What is the price of your item",
        //item="dress", category="dress", starting_bid=3.5
        when: function (answers) {
            return answers.choose == "Post";
        }
    },
    {
        name: "exit",
        message: "Bye",
        when: function (answers) {
            return answers.choose == "Exit";
        }
    },
];