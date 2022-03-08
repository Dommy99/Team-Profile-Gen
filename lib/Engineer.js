const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email,github){
        super(name, id, email,);
        this.github = github;
    };
    
    grabGithub(){
        return this.github;
    };

    grabJob(){
        return "Engineer"
    };
    
}

module.exports = Engineer;