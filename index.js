// require 
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Managers = require("./lib/Manager")

function generateManager() {
    inquirer.prompt([{
        type:"input",
        name:"managerName",
        message:"What's your managers name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a manager name!");
                return false;
            }
        },
    },
    {
        type:"input",
        name:"managerID",
        message:"What's your managers ID?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a manager ID!");
                return false;
            }
        },
    },
    {
        type:"input",
        name:"managerEmail",
        message:"What's your employees's email?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a email!");
                return false;
            }
        },
    },
    {
        type:"input",
        name:"managerOfficeNumber",
        message:"What's your employees's officenumber?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a  officenumber!");
                return false;
            }
        },
    },



    
]);
};

generateManager(); 