var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "checkbox",
        message: "Select what type of user you are:",
        name: "stack",
        choices: [
            "Employee",
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "id",
        message: "What is your id?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    
    
]).then(function (data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
});