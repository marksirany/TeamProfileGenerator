const inquirer = require("inquirer");
const fs = require('fs');

class Employee {
    // Create a constructor for employee with agruments name, id, email
    constructor(name, id, email){
        // Add the properities name, id, title, email
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    // Add methods getName, getId, getEmail to return the corresponding properties
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    // Add method getRole to return a new Employee, which you pass name, id, and email
    getRole(){
        return this.role;
    }
}



module.exports = Employee;
