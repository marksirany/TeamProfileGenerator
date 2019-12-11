const fs = require("fs");

const inquirer = require("inquirer");

// inquirer
//   .prompt({
//     message: "",
//     name: "username"
//   })
  

    

// fs.writeFile("repos.txt", repoNamesStr, function (err) {
//     if (err) {
//         throw err;
//     }

//     console.log(`Saved ${repoNames.length} repos`);
// });




//CREATE FIRST CLASS//

// The first class is an `Employee` parent class with the following properties and methods://
// * name
//     * id
//     * title
//     * getName()
//     * getId()
//     * getEmail()
//     * getRole() // Returns 'Employee'
//     * 

    class Employee {
        // Just like constructor functions, classes can accept arguments
        constructor(id, title, getName, getId, getEmail, getRole) {
            this.id = id;
            this.title = title;
            this.getName = getName;
            this.getId = getId;
            this.getEmail = getEmail;
            this.getRole = getRole;
        }

        printInfo() {
            console.log(`Area: ${this.area}`);
            console.log(`Perimeter: ${this.perimeter}`);
        }
    }

const shape = new Shape(25, 25);

shape.printInfo();