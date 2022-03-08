// require
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const pushDirectory = path.resolve(__dirname, "dist");
const pushPath = path.join(pushDirectory, "card.html")

const render = require("./lib/htmlRender")

const ids = [];
const teamList = [];


function buildTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "chooseMember",
        choices: ["Manager", "Intern", "Engineer", "Make team"],
      },
    ])
    .then((choices) => {
      if (choices.chooseMember == "Manager") {
        makeManager();
      } else if (choices.chooseMember == "Intern") {
        makeIntern();
      } else if (choices.chooseMember == "Engineer") {
        makeEngineer();
      } else {
        makeTeam();
      }
    });
}

function makeManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What's your managers name?",
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
          type: "input",
          name: "managerID",
          message: "What's your managers ID?",
          validate: answer => {
            const password = answer.match(
              /^[0-9]+$/
            );
            if (password) {
                return true;
            }
            return "Please enter a number";
        }
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What's your employees's email?",
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
          type: "input",
          name: "managerOfficeNumber",
          message: "What's your employees's officenumber?",
          validate: answer => {
            const password = answer.match(
              /^[0-9]+$/
            );
            if (password) {
                return true;
            }
            return "Please enter a number";
        }
        },
      ])
      .then((answer) => {
        const manager = new Manager(
          answer.managerName,
          answer.managerID,
          answer.managerEmail,
          answer.managerOfficeNumber
        );
        teamList.push(manager);
        ids.push(answer.managerID);
        buildTeam();
      });
  }

  function makeIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What's your interns name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a intern name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internID",
          message: "What's your interns ID?",
          validate: answer => {
            const password = answer.match(
              /^[0-9]+$/
            );
            if (password) {
                return true;
            }
            return "Please enter a number";
        }
        },
        {
          type: "input",
          name: "internEmail",
          message: "What's your employees's email?",
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
          type: "input",
          name: "internUniversity",
          message: "What's your employees's university?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a  university!");
              return false;
            }
          },
        },
      ])
      .then((answer) => {
        const intern = new Intern(
          answer.internName,
          answer.internID,
          answer.internEmail,
          answer.internUniversity
        );
        teamList.push(intern);
        ids.push(answer.internID);
        buildTeam();
      });
  }

  function makeEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What's your engineers name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a engineer name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engineerID",
          message: "What's your engineers ID?",
          validate: answer => {
            const password = answer.match(
              /^[0-9]+$/
            );
            if (password) {
                return true;
            }
            return "Please enter a number";
        }
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What's your employees's email?",
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
          type: "input",
          name: "engineerGithub",
          message: "What's your employees's Github?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a  Github!");
              return false;
            }
          },
        },
      ])
      .then((answer) => {
        const engineer = new Engineer(
          answer.engineerName,
          answer.engineerID,
          answer.engineerEmail,
          answer.engineerGithub
        );
        teamList.push(engineer);
        ids.push(answer.engineerID);
        buildTeam();
      });
  }

  function makeTeam(){
    if(!fs.existsSync(pushDirectory)){
      fs.mkdirSync(pushDirectory)
    }
    fs.writeFileSync(pushPath, render(teamList), 'utf8');
  };

buildTeam();